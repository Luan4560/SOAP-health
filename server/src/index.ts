import fastify from "fastify";

import { fastifyCors } from "@fastify/cors";
import { defaultRoutes } from "./routes/index.ts";

import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifyCors, { origin: "*" });

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333");
});

app.register(defaultRoutes, { prefix: "v1/api/" });
