import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";
// import {  } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}
const Gamegrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <div>{error}</div>;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} p={3} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game}></GameCards>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
