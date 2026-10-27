import type { CheckoutOrder } from "../types/payment";

let orders: CheckoutOrder[] = [];

export function addOrder(order: CheckoutOrder) {
  orders = [order, ...orders];
}

export function getOrder(orderId: string) {
  return orders.find((o) => o.orderId === orderId);
}