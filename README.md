# Random Quote Machine

A responsive random quote generator built with React as part of the FreeCodeCamp Frontend Libraries certification.

## Features
- Display random inspirational quotes
- One-click quote refreshing
- Direct Twitter sharing integration
- Cached quotes for fast performance
- Modern, animated UI

## Tech Stack
- **React** with Hooks (useState, useEffect)
- **Vite** for development and bundling
- **CSS Custom Properties** for theming
- **ZenQuotes API** for quote data
- **CORS Proxy** for cross-origin requests

## API & Services Used
- **ZenQuotes API**: [https://zenquotes.io/](https://zenquotes.io/) - Free quote API (rate limited)
- **CORS Anywhere**: [https://cors-anywhere.com/](https://cors-anywhere.com/) - CORS proxy for API access
  
List of other CORS proxies for reference: https://gist.github.com/reynaldichernando/eab9c4e31e30677f176dc9eb732963ef

## Local Development

```bash
# Clone repository
git clone https://github.com/codedstrings/fcc-random-quote-generator.git
cd fcc-random-quote-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment
Deployed on GitHub Pages. The app caches 50 quotes on load and cycles through them locally to avoid API rate limits.

## Architecture Notes
- **Quote Caching**: Fetches multiple quotes at startup, stores locally
- **Random Selection**: Picks random quote from cache instead of sequential
- **Fallback System**: Uses hardcoded quotes if API fails
- **CORS Handling**: Uses proxy to bypass browser CORS restrictions

## Live Demo
[View Live Project](https://codedstrings.github.io/fcc-random-quote-generator/)

---
*Built for FreeCodeCamp Frontend Libraries Certification*
