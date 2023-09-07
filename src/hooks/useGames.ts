import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface GameRes {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GameRes>("/games", { signal: controller.signal })
      .then((res) => {
        setGame(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
