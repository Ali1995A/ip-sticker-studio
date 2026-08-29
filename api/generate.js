export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: '只支持 POST 请求' });
  const { image, theme = '日常聊天', count = 12 } = req.body || {};
  if (!image) return res.status(400).json({ error: '请先上传一张角色参考图' });
  if (!process.env.ARK_API_KEY || !process.env.ARK_MODEL) {
    return res.status(503).json({ error: '服务端还没有配置火山方舟 API。请在 Vercel 环境变量中设置 ARK_API_KEY 和 ARK_MODEL。' });
  }
  const fidelity = 'mini pen-doodle illustration, hesitant wobbly black pen contours with clearly visible irregular breaks, awkward hand-drawn shapes, clean flat normally saturated colors, slight selected-edge misregistration, childlike messy-cute charm. Preserve the uploaded subject identity, hairstyle or fur silhouette, face, body proportions, outfit, accessories and signature colors. No logos, watermark, invented text, extra characters, glossy 3D or vector-perfect linework.';
  const prompt = `Create a contact sheet of ${Math.min(Number(count) || 12, 12)} distinct 1:1 personal-IP expression stickers for the theme “${String(theme).slice(0, 80)}”. Use the uploaded image as the only identity source. Start from a stable character anchor, then vary reaction, crop, gesture and one or two emotion marks. Pure white outer canvas, generous margins, readable at chat-thumbnail size. Include happy, laughing, thanks, okay, cheer, shocked, confused, angry, upset, crying, tired and affectionate reactions. Keep 4–6 as small irregular local micro-scenes and the rest as white cutouts. ${fidelity} No text by default.`;
  try {
    const response = await fetch(process.env.ARK_BASE_URL || 'https://ark.cn-beijing.volces.com/api/v3/images/generations', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.ARK_API_KEY}` }, body: JSON.stringify({ model: process.env.ARK_MODEL, prompt, image: [image], size: '2K', response_format: 'url', sequential_image_generation: 'auto', sequential_image_generation_options: { max_images: Math.min(Number(count) || 12, 12) } }) });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data?.error?.message || data?.message || '火山方舟生成失败' });
    return res.status(200).json({ images: (data.data || []).map(item => item.url || item.b64_json).filter(Boolean), prompt });
  } catch (error) { return res.status(500).json({ error: '无法连接火山方舟服务，请稍后重试。' }); }
}
