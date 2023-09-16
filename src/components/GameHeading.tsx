import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenreId from "../hooks/useGenreId";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genreName = useGenreId(gameQuery.genreId);
  const platformName = usePlatform(gameQuery.platformId);

  const dynamicHeading = `${genreName?.name || " "} ${
    platformName?.name || " "
  } Games`;

  return (
    <Heading as="h1" m={4}>
      {dynamicHeading}
    </Heading>
  );
};

export default GameHeading;
