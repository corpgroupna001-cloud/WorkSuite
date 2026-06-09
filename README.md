# WorkSuite Pro

A professional, responsive rebuild of WorkSuite with a premium landing page and three browser tools.

## Included tools
- ZenType AI adaptive typing test with WPM, accuracy, errors, local history, and Groq-powered next passages.
- Signature Studio for branded email signatures with preview, copy, and HTML export.
- Sports Taxonomy Explorer with searchable sports categories and training attributes.

## Deploy on Vercel
1. Upload these files to the GitHub repository root.
2. In Vercel Project Settings > Environment Variables, add `GROQ_API_KEY`.
3. Optional: add `GROQ_MODEL`, otherwise it defaults to `llama-3.1-8b-instant`.
4. Deploy.

## Structure
```
index.html
assets/styles.css
assets/app.js
typingtest/index.html
signature/index.html
Sportstaxonomy/index.html
api/groq.js
vercel.json
```
