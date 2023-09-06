import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Gamegrid from "./components/Gamegrid";
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
      {/* <GridItem area="main"></GridItem> */}
      <Show above="lg">
        <GridItem area="aside" bg="red">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid></Gamegrid>
      </GridItem>
    </Grid>
  );
}

export default App;
