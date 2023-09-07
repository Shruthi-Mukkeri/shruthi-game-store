import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

const Gamegrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <div>{error} hello</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} p={3} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCards key={game.id} game={game}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
