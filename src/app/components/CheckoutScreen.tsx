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
      <div className="fade-up w-full max-w-md rounded-2xl bg-neutral-900 p-4 shadow-lg sm:p-6">
        <p className="truncate text-gray-400">
          {order.merchantName} - #{order.orderId.slice(-6)}
        </p>
        <h1 className="text-3xl font-bold my-4">
          {formatAmount(order.amount)}
        </h1>
        <CardForm amount={order.amount} />
        <Link
          href="/dashboard"
          className="mt-4 block text-center text-sm text-gray-400 hover:text-white"
        >
          View transactions →
        </Link>
      </div>
    </div>
  );
}
