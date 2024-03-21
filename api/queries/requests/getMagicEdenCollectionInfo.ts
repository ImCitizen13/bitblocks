import axios from "axios";

export async function GetCollectionInfoMagicEden(collectionSymbol: string) {
  const axiosClient = axios.create({
    baseURL: `https://api-mainnet.magiceden.io/v2/ord/btc/collections/${collectionSymbol}`,
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return axiosClient.get("").then((response) => response.data);
} 

//http://api-mainnet.magiceden.io/v2/ord/btc/collections/symbol