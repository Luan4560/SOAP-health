import {
  createOrder,
  getOrderById,
  health,
  listIngredients,
  listOrders,
  listSizes,
} from "../controller/order.controller.ts";
import { FastifyTypedInstance } from "../types.ts";

export async function defaultRoutes(app: FastifyTypedInstance) {
  app.post("/pizzas", createOrder);

  app.get("/pizzas", listOrders);

  app.get("/pizzas/:id", getOrderById);

  app.get("/health", health);

  app.get("/sizes", listSizes);

  app.get("/ingredients", listIngredients);
}
