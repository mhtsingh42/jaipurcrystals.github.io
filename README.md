# Jaipur Crystals — v1.2

## Run locally
1) npm install
2) npm run dev
Open http://localhost:3000

## Replace images
Put your images into: public/inspo/
Name them: inspo-1.jpeg ... inspo-8.jpeg

## Deploy (recommended: Vercel)
- Push to GitHub
- Import repo in Vercel
- Add env vars only if using Supabase

## Optional Supabase
Create .env.local:
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...