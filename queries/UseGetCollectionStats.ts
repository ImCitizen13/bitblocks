import { useQuery, useQueryClient } from "react-query";
import { CollectionInfo, type CollectionStats } from "./services/MagicEden";
import { GetCollectionStatsMagicEden } from "./requests/getMagicEdenCollectionStats";
import { GetCollectionInfoMagicEden } from "./requests/getMagicEdenCollectionInfo";

type GetCollectionStatsProps = {
  collectionSymbol: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   _queryFn: (collectionSymbol: string) => Promise<any>;
};

export type GetCollectionStatsReturn = {
  isSuccess: boolean;
//   isPending: boolean;
  isError: boolean;
  error: unknown;
  data?: CollectionStats;
};

export function UseGetCollectionStats({
  collectionSymbol,
//   _queryFn,
}: GetCollectionStatsProps): GetCollectionStatsReturn {
  // Query Key
  const EXPLORE_KEY = "collection_stats";
  // Query Function
  // ================
  // Access the client
  // const queryClient = useQueryClient();
  // Queries
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isSuccess, isError, data, error } = useQuery<CollectionStats>({
    queryKey: [EXPLORE_KEY, collectionSymbol],
    queryFn: () => GetCollectionStatsMagicEden(collectionSymbol),
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { isSuccess: isSuccess, isError: isError, error, data: data };
}


export type GetCollectionInfoReturn = {
    isSuccess: boolean;
  //   isPending: boolean;
    isError: boolean;
    error: unknown;
    data?: CollectionInfo;
  };


export function UseGetCollectionInfo({
    collectionSymbol,
  //   _queryFn,
  }: GetCollectionStatsProps): GetCollectionInfoReturn {
    // Query Key
    const EXPLORE_KEY = "collection_info";
    // Query Function
    // ================
    // Access the client
    // const queryClient = useQueryClient();
    // Queries
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { isSuccess, isError, data, error } = useQuery<CollectionInfo>({
      queryKey: [EXPLORE_KEY, collectionSymbol],
      queryFn: () => GetCollectionInfoMagicEden(collectionSymbol),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { isSuccess: isSuccess, isError: isError, error, data: data };
  }