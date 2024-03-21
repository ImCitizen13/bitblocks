import axios from "axios";

export async function GetCollectionStatsMagicEden(collectionSymbol: string) {
  const axiosClient = axios.create({
    baseURL: `https://api-mainnet.magiceden.io/v2/ord/btc/stat?collectionSymbol=${collectionSymbol}`,
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return axiosClient.get("").then((response) => response.data);
}