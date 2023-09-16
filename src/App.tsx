import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
} from "@chakra-ui/react";
import Nav from "./components/Nav";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchValue: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <Nav
          onSearch={(searchValue) =>
            setGameQuery({ ...gameQuery, searchValue })
          }
        ></Nav>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery}></GameHeading>

        <Flex pl={3} mb={4}>
          <Box mr={4}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onselectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            ></PlatformSelector>
          </Box>

          <SortSelector
            selectedSort={gameQuery.sortOrder}
            onSelectedSort={(sortValue) =>
              setGameQuery({ ...gameQuery, sortOrder: sortValue })
            }
          />
        </Flex>

        <Gamegrid gameQuery={gameQuery}></Gamegrid>
      </GridItem>
    </Grid>
  );
}

export default App;
