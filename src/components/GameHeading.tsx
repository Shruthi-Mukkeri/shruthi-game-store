import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genreName = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const { data: platforms } = usePlatforms();
  const platformName = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
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
