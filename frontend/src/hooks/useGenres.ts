import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genres {
  id: number;
  name: string;
}

interface FetchGenresRequest {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [games, setGames] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresRequest>("/genres", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGenres;
