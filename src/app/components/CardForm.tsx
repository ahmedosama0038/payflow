"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardSchema, type CardFormData } from "../lib/cardSchema";
import { useMutation } from "@tanstack/react-query";
export default function CardForm({ amount }: { amount: number }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormData>({ resolver: zodResolver(CardSchema) });

  const mutation = useMutation({
  mutationFn: async (data: CardFormData & { amount: number }) => {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Payment failed");
      return res.json();
    },
  });

 const onSubmit = (data: CardFormData) => mutation.mutate({ ...data, amount });
  if (mutation.isSuccess) {
    return (
      <div className="fade-up flex flex-col items-center gap-3 py-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-3xl text-green-400">
          ✓
        </div>
        <p className="text-xl font-semibold text-green-400">
          Payment successful!
        </p>
        <p className="text-sm text-gray-400">Thank you for your payment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {mutation.isError && (
        <p className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
          Payment failed. Please try again.
        </p>
      )}
      <input
        {...register("cardNumber")}
        placeholder="Card number"
        className="px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500"
      />
      {errors.cardNumber && (
        <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
      )}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            {...register("expiry")}
            placeholder="MM/YY"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.expiry && (
            <p className="text-red-500 text-sm">{errors.expiry.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("cvv")}
            placeholder="CVV"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm">{errors.cvv.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {mutation.isPending ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Processing...
          </span>
        ) : (
          "Pay"
        )}
      </button>
    </form>
  );
}
