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

## Limitations
Transactions are stored in server memory only, so they reset when the server restarts.
## Run locally
```bash
npm install
npm run dev
```