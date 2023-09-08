import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Nav></Nav>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid></Gamegrid>
      </GridItem>
    </Grid>
  );
}

export default App;
