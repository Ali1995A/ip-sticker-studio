const trustedImageHost = host => host === 'volces.com' || host.endsWith('.volces.com') || host === 'volcengine.com' || host.endsWith('.volcengine.com') || host === 'byteimg.com' || host.endsWith('.byteimg.com');

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: '只支持 GET 请求' });
  try {
    const source = new URL(String(req.query?.url || ''));
    if (source.protocol !== 'https:' || !trustedImageHost(source.hostname)) return res.status(400).json({ error: '不是受信任的生成图片地址' });
    const response = await fetch(source);
    if (!response.ok) return res.status(502).json({ error: '无法下载生成图片' });
    const type = response.headers.get('content-type') || 'image/png';
    if (!type.startsWith('image/')) return res.status(502).json({ error: '生成地址未返回图片' });
    const image = Buffer.from(await response.arrayBuffer());
    res.setHeader('Content-Type', type);
    res.setHeader('Cache-Control', 'private, max-age=300');
    return res.status(200).send(image);
  } catch {
    return res.status(400).json({ error: '图片地址无效或已失效' });
  }
}
