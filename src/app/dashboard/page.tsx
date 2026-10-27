import TransactionsTable from "../components/TransactionsTable";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function DashboardPage() {
  return (
   <main className="mx-auto max-w-4xl p-3 sm:p-6">
    <Link href="/create" className="mb-4 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
  <ArrowLeft className="h-4 w-4" />
  Create new payment
</Link>
     <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-3 sm:p-6 shadow-lg">
        <TransactionsTable />
      </div>
    </main>
  );
}