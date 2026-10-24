import TransactionsTable from "../components/TransactionsTable";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <Link href="/" className="mb-4 inline-block text-sm text-gray-400 hover:text-white">
        ← Back to checkout
      </Link>
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg">
        <TransactionsTable />
      </div>
    </main>
  );
}