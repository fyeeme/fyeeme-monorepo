import api from "./core/api";

export const userApi = {
  get: (id: number) => api.get(`/api/users/${id}`),
  getCurrent: () => api.get("/api/users/current"),
};
