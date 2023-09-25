import { Heading, Spinner } from "@chakra-ui/react";
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
    <>
      <Heading>{game?.name}</Heading>
      <ExpandibleText>{game?.description_raw.toString() || ""}</ExpandibleText>
      <GameAttributes game={game!}></GameAttributes>
      <GameTrailer gameId={game?.id!} />
      <GameScreenshots gameId={game?.id!} />
    </>
  );
};

export default GameDetailsPage;
