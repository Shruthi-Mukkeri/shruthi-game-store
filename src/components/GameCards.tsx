import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" pr={2} mb={4}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore critic={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <Link to={`games/${game.slug}`}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards;
