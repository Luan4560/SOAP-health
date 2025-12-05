import { CreateOrder } from "../types.ts";
import { SIZES, INGREDIENTS } from "./data.ts";

export function calculationFinalPrice(order: CreateOrder) {
  const sizeMap = Object.fromEntries(SIZES.map((s) => [s.id, s.basePrice]));

  const ingredientsMap = Object.fromEntries(
    INGREDIENTS.map((i) => [i.id, i.extraPrice])
  );

  const sizePrice = sizeMap[order.sizeId];

  if (!sizePrice) {
    throw new Error(`Invalid sizeId: ${order.sizeId}`);
  }

  const ingredientsPrice = order.ingredientIds.reduce((total, ing) => {
    const price = ingredientsMap[ing];

    return total + (price ?? 0);
  }, 0);

  return sizePrice + ingredientsPrice;
}
