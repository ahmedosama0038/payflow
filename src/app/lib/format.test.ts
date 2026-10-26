import { formatAmount } from "./format";

test("formats 35000 piasters as 350.00 EGP", () => {
  expect(formatAmount(35000)).toBe("350.00 EGP");
});