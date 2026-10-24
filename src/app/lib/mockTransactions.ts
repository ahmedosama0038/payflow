import type { Transaction } from "../types/payment";

export let mockTransactions: Transaction[] = [
  {
    id: "txn_001",
    amount: 35000,
    currency: "EGP",
    status: "success",
    method: "card",
    createdAt: "2026-10-20T10:30:00Z",
  },

  {
    id: "txn_002",
    amount: 1550,
    currency: "EGP",
    status: "failed",
    method: "wallet",
    createdAt: "2026-10-21T14:45:00Z",
  },
    {
    id: "txn_003",
    amount: 5000,
    currency: "EGP",
    status: "pending",
    method: "card",
    createdAt: "2026-10-22T09:15:00Z",
  }

]
export function addTransaction(t: Transaction) {
  mockTransactions = [t, ...mockTransactions];
}