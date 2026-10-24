import { NextResponse } from "next/server";
import { mockTransactions } from "../../lib/mockTransactions";

export async function GET() {
  return NextResponse.json(mockTransactions);
}