import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import Gamegrid from "../components/Gamegrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" px={5}>
            <GenreList></GenreList>
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameHeading></GameHeading>
          <Flex px={3} mb={4}>
            <Box mr={4}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector />
          </Flex>
          <Gamegrid></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
