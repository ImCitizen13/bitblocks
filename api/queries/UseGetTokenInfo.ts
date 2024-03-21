import { useQuery } from "react-query";
import { type MagicEdenData } from "./services/MagicEden";
import { GetMagicEdenTokensForInscription } from "./requests/getMagicEdenTokens";

export type GetTokenInfoReturn = {
  isSuccess: boolean;
  isError: boolean;
  error: unknown;
  data?: MagicEdenData;
};

export type GetTokenInfoProps = {
  inscriptions: string[];
};

export function UseGetTokensForInscriptions({
  inscriptions,
  //   _queryFn,
}: GetTokenInfoProps): GetTokenInfoReturn {
  // Query Key
  const EXPLORE_KEY = "collection_info";
  // Query Function
  // ================
  // Access the client
  // const queryClient = useQueryClient();
  // Queries
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isSuccess, isError, data, error } = useQuery<MagicEdenData>({
    queryKey: [EXPLORE_KEY, inscriptions],
    queryFn: () => GetMagicEdenTokensForInscription(inscriptions),
  });
  if (inscriptions.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { isSuccess: isSuccess, isError: isError, error, data: data };
  }
  return {
    isSuccess: false,
    isError: true,
    error: Error("No inscriptions to fetch"),
  };
}
