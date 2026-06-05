const DEFAULT_PASSAGE = 'Consistent typing skill grows through calm focus, steady rhythm, and careful correction. Keep your eyes moving slightly ahead of your fingers, relax your shoulders, and let accuracy lead speed. Each practice round should feel smooth, controlled, and a little more confident than the last.';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GROQ_API_KEY || process.env.GROQ_API || process.env.GROQ_KEY;
  if (!apiKey) {
    return res.status(200).json({
      passage: DEFAULT_PASSAGE,
      tip: 'Groq API key is not configured in Vercel. Add GROQ_API_KEY in Project Settings > Environment Variables.',
      source: 'fallback'
    });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const wpm = Number(body.wpm || 0);
  const accuracy = Number(body.accuracy || 100);
  const attempt = Number(body.attempt || 1);
  const level = wpm >= 55 && accuracy >= 95 ? 'advanced' : wpm >= 30 && accuracy >= 88 ? 'intermediate' : 'beginner';

  const prompt = `Create one original typing-test passage for attempt ${attempt + 1}. The user scored ${wpm} WPM with ${accuracy}% accuracy. Difficulty: ${level}. Return JSON only with keys passage and tip. passage must be 75-95 words, plain English, no markdown, no quotes around the paragraph, no lists. tip must be one short coaching sentence.`;

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || 'llama-3.1-8b-instant',
        temperature: 0.7,
        max_tokens: 260,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: 'You generate safe, concise JSON for an adaptive typing test.' },
          { role: 'user', content: prompt }
        ]
      })
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      return res.status(200).json({ passage: DEFAULT_PASSAGE, tip: `Groq request failed: ${errorText.slice(0, 160)}`, source: 'fallback' });
    }

    const data = await groqResponse.json();
    const content = data?.choices?.[0]?.message?.content || '{}';
    let parsed;
    try { parsed = JSON.parse(content); } catch { parsed = {}; }

    const passage = String(parsed.passage || DEFAULT_PASSAGE).replace(/\s+/g, ' ').trim();
    const tip = String(parsed.tip || 'Focus on accuracy first; speed will follow with repetition.').replace(/\s+/g, ' ').trim();
    return res.status(200).json({ passage, tip, source: 'groq' });
  } catch (error) {
    return res.status(200).json({ passage: DEFAULT_PASSAGE, tip: `Using fallback passage because Groq could not be reached: ${error.message}`, source: 'fallback' });
  }
};
