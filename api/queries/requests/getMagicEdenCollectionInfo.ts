import axios from "axios";

export async function GetCollectionInfoMagicEden(collectionSymbol: string) {
  const axiosClient = axios.create({
    baseURL: `https://api-mainnet.magiceden.io/v2/ord/btc/collections/${collectionSymbol}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return axiosClient.get("").then((response) => response.data);
} 

//http://api-mainnet.magiceden.io/v2/ord/btc/collections/symbol