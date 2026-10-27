import { redirect } from "next/navigation";
import { addOrder } from "../lib/orders";
export default function CreatePage() {
   async function createPayment(formData: FormData) {
  "use server";
  const merchant = String(formData.get("merchant") ?? "").trim();
  const amountEgp = Number(formData.get("amount"));

  if (!merchant || !(amountEgp > 0)) return;

  const amount = Math.round(amountEgp * 100);
  const orderId = `ord_${Date.now()}`;

  addOrder({ orderId, merchantName: merchant, amount, linkStatus: "active" });

  redirect(
    `/checkout/${orderId}?amount=${amount}&merchant=${encodeURIComponent(merchant)}`
  );
}
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900 p-4 shadow-lg sm:p-6">
        <h1 className="mb-4 text-2xl font-bold">Create payment</h1>
        <form action={createPayment} className="space-y-4">
          <input
            name="merchant"
            placeholder="Store name"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount in EGP"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500"
          >
            Create payment link
          </button>
        </form>
      </div>
    </main>
  );
}