import z from "zod";

export const CreateOrderSchema = z.object({
  customerName: z.string().min(1, { message: "customerName-required" }),
  sizeId: z.string().min(1, { message: "size-required" }),
  ingredientIds: z.array(z.string()),
});
