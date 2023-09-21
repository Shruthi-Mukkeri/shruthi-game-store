import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameHeading from "./components/GameHeading";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import Nav from "./components/Nav";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchValue: string;
}
function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Nav></Nav>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading></GameHeading>

        <Flex pl={3} mb={4}>
          <Box mr={4}>
            <PlatformSelector></PlatformSelector>
          </Box>

          <SortSelector />
        </Flex>

        <Gamegrid></Gamegrid>
      </GridItem>
    </Grid>
  );
}

export default App;
