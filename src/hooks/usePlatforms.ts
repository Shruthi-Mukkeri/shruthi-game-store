import platforms from "../data/platforms";
import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () => ({ data: platforms, error: false });

export default usePlatforms;
