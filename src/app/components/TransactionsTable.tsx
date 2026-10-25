"use client";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../lib/api";
import { formatAmount } from "../lib/format";
import type { TransactionStatus } from "../types/payment";
import { useState } from "react";

const statusStyles: Record<TransactionStatus, string> = {
  success: "bg-green-500/20 text-green-400",
  failed: "bg-red-500/20 text-red-400",
  pending: "bg-yellow-500/20 text-yellow-400",
  refunded: "bg-gray-500/20 text-gray-400",
};
export default function TransactionsTable() {
  const [search, setSearch] = useState("");
  const { data, isPending, isError } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;
  const filtered = data.filter((t) =>
    t.id.toLowerCase().includes(search.toLowerCase()),
  );
  
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by ID"
        className="mb-4 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      {filtered.length === 0 ? (
  <p className="py-6 text-center text-gray-400">No transactions found</p>
) : (
  <table className="w-full">
    {/* الـ thead والـ tbody زي ما هم */}
     <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">
              ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">
              Method
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t) => (
            <tr key={t.id} className="border-b border-gray-800">
              <td className="px-4 py-3">{t.id}</td>
              <td className="px-4 py-3">{formatAmount(t.amount)}</td>
              <td className="px-4 py-3">{t.method}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[t.status]}`}
                >
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
  </table>
)}
    </div>
  );
}
