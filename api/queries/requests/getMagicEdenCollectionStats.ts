import axios from "axios";

export async function GetCollectionStatsMagicEden(collectionSymbol: string) {
  const axiosClient = axios.create({
    baseURL: `https://api-mainnet.magiceden.io/v2/ord/btc/stat?collectionSymbol=${collectionSymbol}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return axiosClient.get("").then((response) => response.data);
}