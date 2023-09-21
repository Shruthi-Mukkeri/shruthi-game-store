import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenreId from "../hooks/useGenreId";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genreName = useGenreId(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platformName = usePlatform(platformId);

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
