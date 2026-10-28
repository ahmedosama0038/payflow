# PayFlow

Live demo: https://payflow-eight-alpha.vercel.app

A mock online payment checkout and transactions dashboard.

> **This is a demo project. No real money or real cards are involved.**

## Stack
Next.js (App Router), TypeScript, Tailwind CSS, TanStack Query, react-hook-form, Zod, Jest

## Features
- Create payment flow: store name and amount, then a dynamic checkout link
- Dynamic checkout page (`/checkout/[orderId]`) with loading, error, and not-found states
- Card form with Zod validation and a mock payment route
- Server-side validation of the payment amount
- Transactions dashboard with search, status filter, and pagination
- Unit test with Jest

## Test cards
- Any 16-digit number: payment succeeds (use expiry `12/30` and CVV `123`)
- `4000000000000002`: payment is declined

## Limitations
- Transactions are stored in server memory only. On Vercel (serverless) this storage is temporary, so new transactions may disappear and the dashboard may show only the 3 seed transactions.
- The payment amount is sent from the client in this demo, and the server only validates its shape. In production the server must read the amount from its own order record and never trust the client.

## Run locally
```bash
npm install
npm run dev
```