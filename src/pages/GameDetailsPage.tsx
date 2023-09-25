import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandibleText from "../components/ExpandibleText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandibleText>
          {game?.description_raw.toString() || ""}
        </ExpandibleText>
        <GameAttributes game={game!} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game?.id!} />
        <GameScreenshots gameId={game?.id!} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
