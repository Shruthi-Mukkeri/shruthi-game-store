import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface GameRes {
  count: number;
  results: Game[];
}

const Gamegrid = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setErr] = useState("");

  useEffect(() => {
    apiClient
      .get<GameRes>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setErr(err.message));
  }, []);

  return (
    <>
      {error && <div>{error} hello</div>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Gamegrid;
