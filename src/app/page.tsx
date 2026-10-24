import CheckoutScreen from "./components/CheckoutScreen";
import { mockOrder } from "./lib/mockOrders";

export default function Home() {
  return <CheckoutScreen order={mockOrder} />;
}