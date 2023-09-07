import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface GenreRes {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGeners] = useState<Genre[]>([]);
  const [error, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GenreRes>("/genres", { signal: controller.signal })
      .then((res) => {
        setGeners(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenre;
