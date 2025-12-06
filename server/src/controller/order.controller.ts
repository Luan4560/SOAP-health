import { FastifyRequest, FastifyReply } from "fastify";
import { calculationFinalPrice } from "../utils/index.ts";
import { CreateOrder } from "../types.ts";
import { CreateOrderSchema } from "../schemas/index.ts";
import { SIZES, INGREDIENTS } from "../utils/data.ts";

type OrderFilters = {
  customerName?: string;
  sortBy?: "finalPrice" | "createdAt";
  order?: "asc" | "desc";
};

let db: CreateOrder[] = [];

export function health(_: FastifyRequest, reply: FastifyReply) {
  try {
    reply.send({ status: "Ok" });
  } catch (error) {
    reply.code(500).send({ error: error });
  }
}

export function createOrder(
  request: FastifyRequest<{ Body: CreateOrder }>,
  reply: FastifyReply
) {
  try {
    const { customerName, ingredientIds, sizeId } = CreateOrderSchema.parse(
      request.body
    );

    const isSizeOnTheList = SIZES.find((item) => item.id === sizeId);

    const isIngredientsAvailable = ingredientIds.filter(
      (name) =>
        !INGREDIENTS.some(
          (item) => item.id.toLocaleLowerCase() === name.toLocaleLowerCase()
        )
    );

    if (isIngredientsAvailable.length > 0) {
      reply.code(400).send({
        ingredients: `${isIngredientsAvailable} Do not exist`,
      });
    }

    if (!customerName) {
      reply.code(400).send({ customerName: "Cannot be empty" });
    }

    if (!isSizeOnTheList) {
      reply.code(400).send({ error: `Invalid sizeId: ${sizeId}` });
    }

    const newOrder = {
      id: Math.random().toString(36).slice(2, 10),
      customerName,
      ingredientIds,
      sizeId,
      createdAt: new Date().toISOString(),
    };

    db.push(newOrder);

    const results = db.map((order) => ({
      ...order,
      finalPrice: calculationFinalPrice(order),
    }));

    reply.code(201).send(results[db.length - 1]);
  } catch (error) {
    console.log(error);
  }
}

// TODO: implementar filtros
export function listOrders(
  request: FastifyRequest<{ Querystring: Record<string, any> }>,
  reply: FastifyReply
) {
  try {
    const { customerName } = request.query;

    let results = db.map((order) => ({
      ...order,
      finalPrice: calculationFinalPrice(order),
    }));

    if (customerName) {
      const term = customerName.toLocaleLowerCase();
      results = results.filter((item) =>
        item.customerName.toLowerCase().includes(term)
      );
    }

    reply.code(200).send({ orders: results });
  } catch (error) {
    reply.code(500).send({ error: error });
  }
}

export function getOrderById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;

    const order = db.find((item) => item.id === id);

    if (!order) {
      return reply.code(404).send({ error: "Pizza not found" });
    }

    const result = {
      ...order,
      finalPrice: calculationFinalPrice(order),
    };

    return reply.code(200).send(result);
  } catch (error) {
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export function listSizes(_: FastifyRequest, reply: FastifyReply) {
  try {
    reply.send({ sizes: SIZES });
  } catch (error) {
    reply.code(500).send({ error: error });
  }
}

export function listIngredients(_: FastifyRequest, reply: FastifyReply) {
  try {
    reply.send({ ingredients: INGREDIENTS });
  } catch (error) {
    reply.code(500).send({ error: error });
  }
}
