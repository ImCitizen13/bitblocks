import axios from "axios";
import { type MagicEdenData } from "api/queries/services/MagicEden";

export async function GetInfiniteWalletAssetsMagicEden(
  collectionSymbol: string,
  offset: number,
): Promise<MagicEdenData> {
  const axiosClient = axios.create({
    baseURL: `https://api-mainnet.magiceden.io/v2/ord/btc/tokens?collectionSymbol=${collectionSymbol}&showAll=true&limit=100&offset=${offset}&sortBy=priceAsc`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  const result = await axiosClient.get("").then((response) => response.data);
  return result as MagicEdenData;
}

//https://api-mainnet.magiceden.io/v2/ord/btc/tokens?collectionSymbol=bit-blocks&showAll=true&limit=100&offset=0&sortBy=priceAsc
//https://api-mainnet.magiceden.io/v2/ord/btc/tokens?collectionSymbol=bit-blocks&showAll=true&limit=100&offset=0&sortBy=priceAsc
