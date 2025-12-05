import API from "../api";

export const getHealth = async () => {
  const response = await API.get("/health");

  return response.data;
};

export const getSizes = async () => {
  const response = await API.get("/sizes");
  return response.data.sizes;
};

export const getIngredients = async () => {
  const response = await API.get("/ingredients");
  return response.data.ingredients;
};

export const getOrders = async () => {
  const response = await API.get("/pizzas");
  return response.data.orders;
};

export const getOrderById = async (id: string) => {
  const response = await API.get(`/pizzas/${id}`);
  return response.data;
};

export const createOrder = async (payload: CreateOrder) => {
  const response = await API.post("/pizzas", payload);

  return response.data;
};
