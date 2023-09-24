import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandibleText from "../components/ExpandibleText";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandibleText>{game?.description_raw.toString() || ""}</ExpandibleText>
    </>
  );
};

export default GameDetailsPage;
