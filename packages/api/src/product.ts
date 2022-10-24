import api from "./core/api";

export const productApi = {
  get: (id: number) => api.get(`/api/products/${id}`),
  listAll: (params: Record<string, any>) =>
    api.get("/api/products/search", { params }),
};
