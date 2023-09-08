import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onselectPlatform={(platform) => setSelectedPlatform(platform)}
        ></PlatformSelector>

        <Gamegrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        ></Gamegrid>
      </GridItem>
    </Grid>
  );
}

export default App;
