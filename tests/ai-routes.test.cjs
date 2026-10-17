const {test,beforeEach}=require('node:test');
const assert=require('node:assert/strict');
let calls;
beforeEach(()=>{globalThis[Symbol.for('family-ai.guard.v1')]?.clear();for(const k of Object.keys(process.env))if(k.startsWith('AI_GUARD_')||k==='AI_CALLS_ENABLED')delete process.env[k];calls=[];global.fetch=async()=>{throw new Error('Unexpected network');};});
function response(){return {headers:{},setHeader(k,v){this.headers[k]=v;},status(n){this.statusCode=n;return this;},json(v){this.body=JSON.stringify(v);return this;},end(v){this.body=v;},send(v){this.body=v;}};}

test('sticker generation preserves one-sheet dimensions and shares a quota',async()=>{
 const {default:handler}=await import('../api/generate.js');
 process.env.ARK_API_KEY='test-only';process.env.ARK_MODEL='test-image-model';process.env.AI_GUARD_PER_DAY='1';
 global.fetch=async(url,init)=>{calls.push({url,init});return Response.json({data:[{url:'https://example.test/result.png'}]});};
 const req={method:'POST',body:{image:'data:image/png;base64,aGVsbG8=',theme:'日常'}};const res=response();await handler(req,res);assert.equal(res.statusCode,200);
 const body=JSON.parse(calls[0].init.body);assert.equal(body.size,'1920x1920');assert.equal(body.image.length,1);
 const limited=response();await handler(req,limited);assert.equal(limited.statusCode,429);assert.equal(calls.length,1);
});
test('sticker rejects remote image URLs and oversized themes',async()=>{
 const {default:handler}=await import('../api/generate.js');
 for(const body of [{image:'https://untrusted.example/a'},{image:'data:image/png;base64,aGVsbG8=',theme:'x'.repeat(81)}]){const res=response();await handler({method:'POST',body},res);assert.equal(res.statusCode,400);}
 assert.equal(calls.length,0);
});
