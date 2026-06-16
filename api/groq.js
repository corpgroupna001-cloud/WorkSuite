const DEFAULT_PASSAGE = 'Every single keystroke is a profound step forward. Anchor yourself in this present moment, let go of any tension in your shoulders, and breathe into a steady rhythm. The journey to greatness is paved with calm focus and gentle corrections. Believe in your capability to improve, and let confidence guide your speed.';

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
  // Updated prompt specifically asking for highly motivational and uplifting content
  const prompt = `Return JSON only: {"passage":"75-95 word original highly motivational and uplifting typing passage","tip":"one short encouraging and motivational coaching sentence"}. User: ${wpm} WPM, ${accuracy}% accuracy. Difficulty: ${level}.`;
  
  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', { 
      method: 'POST', 
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ 
        model: process.env.GROQ_MODEL || 'llama-3.1-8b-instant', 
        temperature: 0.8, // Slightly increased temperature for more creative/motivational prose
        max_tokens: 260, 
        response_format: { type: 'json_object' }, 
        messages: [
          { role: 'system', content: 'You are an inspiring typing coach. Generate safe concise JSON for a motivational typing test.' },
          { role: 'user', content: prompt }
        ] 
      }) 
    });
    
    if (!r.ok) throw new Error((await r.text()).slice(0, 160));
    
    const data = await r.json();
    const parsed = JSON.parse(data?.choices?.[0]?.message?.content || '{}');
    
    return res.status(200).json({ 
      passage: String(parsed.passage || DEFAULT_PASSAGE).replace(/\s+/g, ' ').trim(), 
      tip: String(parsed.tip || 'Keep your rhythm steady, breathe deeply, and gently correct mistakes without losing confidence.').replace(/\s+/g, ' ').trim(), 
      source: 'groq' 
    });
  } catch (e) {
    return res.status(200).json({ passage: DEFAULT_PASSAGE, tip: `Fallback active: ${e.message}`, source: 'fallback' });
  }
}
