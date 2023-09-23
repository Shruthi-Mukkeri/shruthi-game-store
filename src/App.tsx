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
  return;
}

export default App;
