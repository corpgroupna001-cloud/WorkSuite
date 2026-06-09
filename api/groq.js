const DEFAULT_PASSAGE = 'Consistent typing skill grows through calm focus, steady rhythm, and careful correction. Keep your eyes moving slightly ahead of your fingers, relax your shoulders, and let accuracy lead speed. Each practice round should feel smooth, controlled, and more confident than the last.';
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const apiKey = process.env.GROQ_API_KEY || process.env.GROQ_API || process.env.GROQ_KEY;
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const wpm = Number(body.wpm || 0), accuracy = Number(body.acc || body.accuracy || 100);
  if (!apiKey) return res.status(200).json({ passage: DEFAULT_PASSAGE, tip: 'Add GROQ_API_KEY in Vercel environment variables to enable AI passages.', source: 'fallback' });
  const level = wpm >= 55 && accuracy >= 95 ? 'advanced' : wpm >= 30 && accuracy >= 88 ? 'intermediate' : 'beginner';
  const prompt = `Return JSON only: {"passage":"75-95 word original typing passage","tip":"one short coaching sentence"}. User: ${wpm} WPM, ${accuracy}% accuracy. Difficulty: ${level}.`;
  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', { method:'POST', headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'}, body:JSON.stringify({ model:process.env.GROQ_MODEL || 'llama-3.1-8b-instant', temperature:.7, max_tokens:260, response_format:{type:'json_object'}, messages:[{role:'system',content:'Generate safe concise JSON for a typing test.'},{role:'user',content:prompt}] }) });
    if (!r.ok) throw new Error((await r.text()).slice(0,160));
    const data = await r.json();
    const parsed = JSON.parse(data?.choices?.[0]?.message?.content || '{}');
    return res.status(200).json({ passage: String(parsed.passage || DEFAULT_PASSAGE).replace(/\s+/g,' ').trim(), tip: String(parsed.tip || 'Keep your rhythm steady and correct mistakes calmly.').replace(/\s+/g,' ').trim(), source:'groq' });
  } catch (e) { return res.status(200).json({ passage: DEFAULT_PASSAGE, tip: `Fallback active: ${e.message}`, source:'fallback' }); }
}
