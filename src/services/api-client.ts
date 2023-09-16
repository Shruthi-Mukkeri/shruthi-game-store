import axios, { AxiosRequestConfig } from "axios";

export interface DataRes<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiclient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4143126601494438932fe1d19bdb6fbd",
  },
});

class ApiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return apiclient
      .get<DataRes<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
