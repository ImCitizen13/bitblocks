import {
  type CollectionInfo,
  type CollectionStats,
} from "queries/services/MagicEden";

export type BitblocksDetails = {
  stats: CollectionStats | undefined;
  info: CollectionInfo | undefined;
};

const BitblocksDetailsView = ({ stats, info }: BitblocksDetails) => {
  return (
    <div>
      <p>{info?.name}</p>
      <p>{stats?.floorPrice}</p>
      <div>
        <p>Supply: </p>
        <p>{stats?.supply}</p>
      </div>
    </div>
  );
};

export default BitblocksDetailsView;
