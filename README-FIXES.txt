WorkSuite fixed package

Changed:
- Fixed typingtest CSS unit issues by rebuilding valid CSS.
- Fixed typing test start, timer, WPM, accuracy, error counting, reset, next-test and history logic.
- Added Vercel serverless endpoint at /api/groq so the Groq API key stays in Vercel environment variables.
- Added fallback passage if GROQ_API_KEY is missing or Groq request fails.
- Added vercel.json rewrite for /api/groq.

Vercel env variable:
- Set GROQ_API_KEY in Vercel Project Settings > Environment Variables.
- Optional: GROQ_MODEL, defaults to llama-3.1-8b-instant.

Important:
- User requested not to change signature/index.html. The fixed work is in root, typingtest, api, and vercel.json. If applying this over the GitHub repo, keep your original signature/index.html.
