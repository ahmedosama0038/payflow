import { notFound } from "next/navigation";
import CheckoutScreen from "../../components/CheckoutScreen";

type Props = {
  params: Promise<{ orderId: string }>;
  searchParams: Promise<{ amount?: string; merchant?: string }>;
};

export default async function CheckoutPage({ params, searchParams }: Props) {
  const { orderId } = await params;
  const { amount, merchant } = await searchParams;

  const value = Number(amount);
  if (!merchant || !(value > 0)) notFound();

  return (
    <CheckoutScreen
      order={{
        orderId,
        merchantName: merchant,
        amount: value,
        linkStatus: "active",
      }}
    />
  );
}