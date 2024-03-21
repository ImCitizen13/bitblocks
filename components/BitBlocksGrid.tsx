import React, { LegacyRef, Ref, useRef } from "react";
import BitblocksCell, { type BitblockCellProps } from "./BitblockCell";
import styles from "./BitblocksGrid.module.css";
import useElementRectSize, { type Dimensions } from "hooks/useElementRectSize";

const numOfCells = ({
  elementSize,
  threshold,
}: {
  elementSize: Dimensions;
  threshold: number;
}) => {
  // const percentage = elementSize.width / screenSize.width;
  const diff = Math.floor(elementSize.width / threshold);
  // console.log("Element Size 🤓: ", elementSize.width);
  // console.log("Difference 🤓: ", Math.floor(diff));
  // return Math.min(4, diff);
  return elementSize.width > 0 ? diff : 3;
};

const BitBlocksGrid = ({
  bitblocks,
}: {
  bitblocks: BitblockCellProps[] | undefined;
}) => {
  const gridViewRef = useRef<HTMLDivElement>(null);
  const IMG_WITH_THRESHOLD = 250;
  const elementRectSize = useElementRectSize(gridViewRef);

  return (
    // <div id={styles.main}>
    <div
      ref={gridViewRef}
      id={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${numOfCells({ elementSize: elementRectSize, threshold: IMG_WITH_THRESHOLD })}, 1fr)`,
      }}
    >
      {bitblocks?.map((bitblock, index) => {
        return (
          <BitblocksCell
            key={index}
            i={index}
            props={bitblock}
            threshold={IMG_WITH_THRESHOLD}
          />
        );
      })}
    </div>
    // </div>
  );
};

export default BitBlocksGrid;
