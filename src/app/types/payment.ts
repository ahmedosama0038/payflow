export type LinkStatus = "active" | "expired" | "paid";

export type PaymentStatus = "idle" | "pending" | "success" | "failed";

export type PaymentMethod = "card" | "wallet";


export type TransactionStatus = "pending" | "success" | "failed" | "refunded";

export type Transaction = {
  id: string;
  amount: number;
  currency: "EGP";
  status: TransactionStatus;
  method: PaymentMethod;
  createdAt: string;
};

export type CheckoutOrder = {
  orderId: string;
  merchantName: string;
  amount: number;
  linkStatus: LinkStatus;
};