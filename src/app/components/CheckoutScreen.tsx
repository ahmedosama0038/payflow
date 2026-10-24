import type { CheckoutOrder } from "../types/payment";
import { formatAmount } from "../lib/format";
import CardForm from "./CardForm";
import Link from "next/link";

export default function CheckoutScreen({ order }: { order: CheckoutOrder }) {
  if (order.linkStatus === "expired") {
    return <p>This payment link has expired.</p>;
  }

  if (order.linkStatus === "paid") {
    return <p>This order has already been paid.</p>;
  }

  return (
<div className="min-h-screen flex items-center justify-center p-4">
  <div className="w-full max-w-md bg-neutral-900 rounded-2xl p-6 shadow-lg">
    <p className="text-gray-400">{order.merchantName} - {order.orderId}</p>
    <h1 className="text-3xl font-bold my-4">{formatAmount(order.amount)}</h1>
    <CardForm />
    <Link href="/dashboard" className="mt-4 block text-center text-sm text-gray-400 hover:text-white">
  View transactions →
</Link>
  </div>
</div>

  );
}