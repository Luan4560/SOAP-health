import {
  FastifyBaseLogger,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from "fastify";

export type FastifyTypedInstance = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger
>;

export interface CreateOrder {
  id?: string;
  customerName: string;
  sizeId: string;
  finalPrice?: number;
  ingredientIds: string[];
}

export interface FilterQuery {
  customerName?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}
