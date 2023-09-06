import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const Gamegrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <div>{error} hello</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} p={3} spacing={10}>
        {games.map((game) => (
          <GameCards key={game.id} game={game}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
