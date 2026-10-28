import { NextResponse } from "next/server";
import { addTransaction } from "../../lib/mockTransactions";
import { PaymentSchema } from "../../lib/cardSchema";
export async function POST(request: Request) {
 const { cardNumber, amount } = await request.json();
const result =  PaymentSchema.safeParse({amount});
if(!result.success){
  return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
}
await new Promise((resolve) => setTimeout(resolve, 2000));
  const declined = cardNumber === "4000000000000002";

  addTransaction({
    id: `txn_${Date.now()}`,
    amount: amount,
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