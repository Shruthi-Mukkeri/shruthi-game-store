import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { DataRes } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => ({ data: genres, isLoading: false, error: false });
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<DataRes<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
