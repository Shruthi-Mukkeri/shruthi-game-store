import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCards from "./GameCards";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}
const Gamegrid = ({ gameQuery }: Props) => {
  const pageSize = 10;
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery, { pageSize });

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <div>{error.message}</div>;
  return (
    <Box p={3}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCards game={game}></GameCards>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={5}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </Box>
  );
};

export default Gamegrid;
