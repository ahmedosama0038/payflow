import { NextResponse } from "next/server";
import { addTransaction } from "../../lib/mockTransactions";
export async function POST(request: Request) {
  const { cardNumber } = await request.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const declined = cardNumber === "4000000000000002";

  addTransaction({
    id: `txn_${Date.now()}`,
    amount: 35000,
    currency: "EGP",
    status: declined ? "failed" : "success",
    method: "card",
    createdAt: new Date().toISOString(),
  });

  if (declined) {
    return NextResponse.json({ error: "Card declined" }, { status: 402 });
  }
  return NextResponse.json({ status: "success" });
}