import { z } from "zod";

export const CardSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"),
  cvv: z.string().regex(/^\d{3}$/, "CVV must be 3 digits"),
  
});

export type CardFormData = z.infer<typeof CardSchema>;

export const PaymentSchema = z.object({
  amount: z.number().int().positive(),
});

export type PaymentFormData = z.infer<typeof PaymentSchema>;