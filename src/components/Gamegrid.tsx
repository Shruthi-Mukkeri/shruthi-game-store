import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCards from "./GameCards";

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
  const fatchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fatchedGameCount}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      next={() => fetchNextPage()}
    >
      <SimpleGrid p={3} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
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
    </InfiniteScroll>
  );
};

export default Gamegrid;
