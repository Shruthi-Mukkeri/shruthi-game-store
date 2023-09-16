import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { DataRes } from "./../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface InfinityGames {
  pageSize: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery, query: InfinityGames) =>
  useInfiniteQuery<DataRes<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchValue,
          page: pageParam,
          // _start: (pageParam - 1) * query.pageSize,
          // _limit: query.pageSize,
        },
      }),
    // keepPreviousData: true,
    getNextPageParam: (lastpage, allPages) => {
      return lastpage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), //24h
  });

export default useGames;
