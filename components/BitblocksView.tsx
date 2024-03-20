import React, { useEffect, useState } from "react";
import styles from "./BitblocksView.module.css";
import { type BitblockCellProps } from "./BitblockCell";
import {
  type MagicEdenData,
  type CollectionInfo,
  type CollectionStats,
  type MagicEdenToken,
  getOrdinalsFromMagicEdenTokens,
  magicEdenToBitBlocksCellProps1,
} from "queries/services/MagicEden";
import {
  UseGetCollectionInfo,
  UseGetCollectionStats,
} from "queries/UseGetCollectionStats";
import BitblocksDetailsView from "./BitblocksDetailsView";
import BitBlocksGrid from "./BitBlocksGrid";
import testTokens from "./bitblocks_test_blocks.json";
import testOrigiTokens from "./bitblocks_test_original.json";
import { type Ordinal } from "queries/types";
import { useGetMultiPageWalletAssets } from "queries/UseAllWalletAssets";

const BitblocksView = () => {
  const [bitblocks, setBitblocks] = useState<BitblockCellProps[]>();
  const [stats, setStats] = useState<CollectionStats>();
  const [info, setInfo] = useState<CollectionInfo>();
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [showBitBlocks, setShowBitBlocks] = useState<boolean>(false);

  const COLLECTION_SYMBOL = "bit-blocks";

  const {
    isError: statsIsError,
    data: collectionStatsData,
    error: statsError,
  } = UseGetCollectionStats({ collectionSymbol: COLLECTION_SYMBOL });
  const {
    isError: pagesIsError,
    error: pagesError,
    data: infiniteData,
    hasNextPage: hasNextPage,
    isFetching: isFetching,
    fetchNextPage: fetchNextPage,
  } = useGetMultiPageWalletAssets({
    collectionSymbol: COLLECTION_SYMBOL,
  });

  const { data: collectionInfoData, error: infoError } = UseGetCollectionInfo({
    collectionSymbol: COLLECTION_SYMBOL,
  });

  useEffect(() => {
    setTimeout(() => {
      //  const tokens: MagicEdenToken[] = JSON.parse(testTokens.tokens)
      // magicEdenToBitBlocksCellProps(tokens)
      if (testTokens.tokens.length > 0) {
        console.log("TEST Original: ", testOrigiTokens.tokens);
        // const tokens: MagicEdenToken[] = testTokens.tokens;
        // const originalTokens: Ordinal[] = getOrdinalsFromMagicEdenTokens(
        //   testOrigiTokens.tokens,
        // );
        // const { bitblocks: bit } = magicEdenToBitBlocksCellProps1(
        //   tokens,
        //   originalTokens,
        // );
        // setBitblocks(bit);
      }
    }, 1000);
  }, []);

  // Query for bitblocks tokens request
  useEffect(() => {
    if (!collectionStatsData) {
      return;
    }
    //Has pages
    setStats(collectionStatsData);
    console.log("👍");
  }, [collectionStatsData]);

  useEffect(() => {
    if (!collectionInfoData) {
      return;
    }
    //Has pages
    setInfo(collectionInfoData);
    console.log("👍");
  }, [collectionInfoData]);

  useEffect(() => {
    if (bitblocks && bitblocks.length > 0) {
      setShowBitBlocks(true);
    }
  }, [bitblocks]);

  React.useEffect(() => {
    if (!infiniteData) {
      return;
    }
    //Has pages
    if (infiniteData.pages.length > 0) {
      const allTokens = infiniteData.pages.flatMap((page) => page.tokens);
      const { bitblocks: bitblocksData } =
        magicEdenToBitBlocksCellProps1(allTokens);
      // Set Bitblocks
      setBitblocks(bitblocksData);
      if (hasNextPage) {
        // To Fetch all pages before displaying the list/grid
        //fetchNextPage();
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    }
  }, [infiniteData]);

  // Query for original tokens request
  // React.useEffect(() => {
  //   if (!originalTokensData) {
  //     return;
  //   }
  //   if (bitblocks) {
  //     if (bitblocks.length == originalInscriptionsData?.tokens.length) {
  //       // Convert tokens to ordinals
  //       const ordinals = getOrdinalsFromMagicEdenTokens(
  //         originalInscriptionsData?.tokens,
  //       );
  //       // Add tokens to bitblocks original inscriptions
  //       bitblocks.forEach((bitblock, index) => {
  //         bitblock.originalInscription = ordinals[index];
  //       });
  //       // Reset bitblocks
  //       setBitblocks(bitblocks);
  //       setShowBitBlocks(true);
  //     }
  //   }
  //   //Has data
  // }, [originalInscriptionsData]);

  return (
    <div id={styles.main}>
      <h1 id={styles.title}>BitBlocks</h1>
      <BitblocksDetailsView info={info} stats={stats} />
      <div id={styles.gridContainer}>
        {showBitBlocks && <BitBlocksGrid bitblocks={bitblocks} />}
      </div>
      {/* <div
        style={{
          width: "100%",
          background: hasMore ? "#9ca3af" : "rgba(255, 255, 255, 0)",
        }}
      >
        Load more 🤮
      </div> */}
    </div>
  );
};

export default BitblocksView;
