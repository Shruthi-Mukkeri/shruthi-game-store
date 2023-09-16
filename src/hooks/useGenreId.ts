import useGenres from "./useGenres";

const useGenreId = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
};
export default useGenreId;
