import {
  type FetchNextPageOptions,
  type InfiniteData,
  type InfiniteQueryObserverResult,
} from "react-query";
import { type Ordinal } from "../types";
import { type BitblockCellProps } from "components/BitblockCell";

export type MagicEdenData = {
  tokens: MagicEdenToken[];
};

export type CollectionStats = {
  totalVolume?: number;
  owners?: number;
  supply?: number;
  floorPrice: number;
  totalListed?: number;
  pendingTransactions?: number;
  inscriptionNumberMin?: number;
  inscriptionNumberMax?: number;
  symbol: string;
};

export type CollectionInfo = {
  name: string;
  imageURI: string;
  inscriptionIcon: string;
  // supply?: number;
  description: string;
  twitterLink: string;
  discordLink: string;
  websiteLink: string;
  createdAt: string;
};

export type MagicEdenCollection = {
  symbol: string;
  name: string;
  imageURI: string;
  chain: string;
  description: string;
  supply: number;
  twitterLink: string;
  discordLink: string;
  websiteLink: string;
  createdAt: string;
};

export type Attributes = {
  value: string;
  trait_type: string;
};

export type Meta = {
  name: "Bitblock #1830";
  high_res_img_url?: string;
  attributes: Attributes[];
};

export type MagicEdenToken = {
  id: string;
  contentURI: string;
  contentType: string;
  contentBody: string;
  meta?: { name: string; high_res_img_url: string };
  collection: MagicEdenCollection;
};

// function fixIncompleteImageLinks(imageUrl: string) {
//   const linkSuffix = ".ipfs.nftstorage.link/";
//   const linkPrefix = "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/";
//   return imageUrl.includes(linkSuffix) ? linkPrefix + imageUrl : imageUrl;
// }

export type GetInfiniteWalletAssetsReturn = {
  isError: boolean;
  error: Error | null;
  data?: InfiniteData<MagicEdenData>;
  hasNextPage: boolean | undefined;
  isFetching: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<MagicEdenData, Error>>;
};
export function getOrdinalsFromMagicEdenTokens(
  tokens?: MagicEdenToken[],
): Ordinal[] {
  const resultArray: Ordinal[] = [];
  if (tokens) {
    tokens.forEach((token) => {
      // Create an ordinal from the data
      const ordinal: Ordinal = {
        name: token.meta ? token.meta.name : token.id,
        image_url: token.contentURI ?? "",
        contentType: token.contentType,
        collectionImageURI: "",
        id: token.id,
      };
      resultArray.push(ordinal);
    });
  }
  return resultArray;
}

export type MagicEdenToBitBlocksReturn = {
  bitblocks: BitblockCellProps[];
};

export function magicEdenToBitBlocksCellProps1(
  tokens: MagicEdenToken[],
  originalOrdinals?: Ordinal[],
): MagicEdenToBitBlocksReturn {
  const bitblocks: BitblockCellProps[] = [];
  // const inscriptions: string[] = [];
  tokens.forEach((token) => {
    // Create a BitblockCellProps from the data
    const bitblock: BitblockCellProps = {
      name: token.meta?.name ?? token.collection.name,
      image_url: `https://renderer.magiceden.dev/v2/render?id=${token.id}`, //token.contentURI ?? "",
      contentType: token.contentType,
      originalInscriptionNumber: ''
    };
    if (token.contentBody) {
      const body =
        atob(token.contentBody).split("data-s=")[1]?.split('"')[1] ?? "";
      // bitblock.originalInscription = originalOrdinals.find(
      //   (ordinal) => ordinal.id == body,
      // );
      bitblock.originalInscriptionNumber = body
      
    }
    bitblocks.push(bitblock);
  });
  return { bitblocks };
}

// export function magicEdenToBitBlocksCellProps(
//   tokens: MagicEdenToken[],
// ): MagicEdenToBitBlocksReturn {
//   const bitblocks: BitblockCellProps[] = [];
//   tokens.forEach((token) => {
//     // Create a BitblockCellProps from the data
//     const bitblock: BitblockCellProps = {
//       name: token.meta?.name ?? token.collection.name,
//       image_url: `https://renderer.magiceden.dev/v2/render?id=${token.id}`, //token.contentURI ?? "",
//       contentType: token.contentType,
//     };
//     if (token.contentBody) {
//       // const body = atob(token.contentBody);
//       // inscriptions.push(body.split("data-s=")[1]?.split('"')[1] ?? "");
//     }
//     bitblocks.push(bitblock);
//   });
//   return { bitblocks };
// }

// export function combineMagicEdenCollectionsData(
//   data: InfiniteData<MagicEdenData>,
// ): OrdinalCollection[] {
//   // Combine all the tokens from all the pages we got 1-....
//   const allTokens = data.pages.flatMap((page) => page.tokens);
//   // Get OrdinalCollection
//   const collections: OrdinalCollection[] =
//     getCollectionsFromMagicEden(allTokens);

//   return collections;
// }
