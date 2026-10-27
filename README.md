
Live demo: https://payflow-eight-alpha.vercel.app
# PayFlow

A mock online payment checkout and transactions dashboard.

> **This is a demo project. No real money or real cards are involved.**

## Stack
Next.js (App Router), TypeScript, Tailwind CSS, TanStack Query, react-hook-form, Zod

## Features
- Checkout with card form and validation
- Server-side payment route (mock)
- Transactions dashboard

## Test cards
- Any 16-digit number: payment succeeds
- `4000000000000002`: payment is declined
- 
- Transactions are stored in server memory. On Vercel (serverless) this storage is temporary, so new transactions may disappear and the dashboard may show only the 3 seed transactions.
- The payment amount is sent from the client in this demo. In production the server must read the amount from its own order record, never trust the client.
## Limitations
Transactions are stored in server memory only, so they reset when the server restarts.
## Run locally
```bash
npm install
npm run dev
```