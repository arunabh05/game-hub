import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "40037f6646da4d65a72f39d8dec18e2e",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
