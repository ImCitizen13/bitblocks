import {
    useInfiniteQuery,
    type InfiniteData,
    FetchNextPageOptions,
    InfiniteQueryObserverResult,
    useQueryClient,
  } from "react-query";
  import { MagicEdenData } from "./services/MagicEden";
import { GetInfiniteWalletAssetsMagicEden } from "./requests/getWalletAssets";
  
  type GetInfiniteWalletAssetsProps = {
    collectionSymbol: string;
  };
  
  export type GetInfiniteCollectionAssetsReturn = {
    isError: boolean;
    error: Error | null;
    data?: InfiniteData<MagicEdenData>;
    hasNextPage: boolean | undefined;
    isFetching: boolean;
    fetchNextPage: (
      options?: FetchNextPageOptions | undefined
    ) => Promise<InfiniteQueryObserverResult<MagicEdenData, Error>>;
  };


  export function useGetMultiPageCollectionAssets({
    collectionSymbol,
  }: GetInfiniteWalletAssetsProps): GetInfiniteCollectionAssetsReturn {
    // Query Key
    const EXPLORE_KEY = "explore_wallet_pages";
    // Access the client
    const queryClient = useQueryClient();
  
    // QueryFunction
    function infiniteQueryFn({ pageParam = 0 }): Promise<MagicEdenData> {
      return GetInfiniteWalletAssetsMagicEden(collectionSymbol, pageParam);
    }
  
    const { hasNextPage, data, isFetching, fetchNextPage, isError, error } =
      useInfiniteQuery<MagicEdenData, Error>(
        "MeInfinite" + collectionSymbol,
        infiniteQueryFn,
        {
          getNextPageParam: (lastPage, pages) => {
            // console.log("Pages: ", pages.length);
            return lastPage.tokens.length < 100 ? undefined : pages.length * 100;
          },
        }
      );
  
    return {
      isError: isError,
      error: error,
      data: data,
      hasNextPage: hasNextPage,
      isFetching: isFetching,
      fetchNextPage: fetchNextPage,
    };
  }