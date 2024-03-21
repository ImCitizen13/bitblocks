import {
  type CollectionInfo,
  type CollectionStats,
} from "api/queries/services/MagicEden";

export type BitblocksDetails = {
  stats: CollectionStats | undefined;
  info: CollectionInfo | undefined;
};

const BitblocksDetailsView = ({ stats, info }: BitblocksDetails) => {
  return (
    <div>
      <p>{info?.name}</p>
      <p>
        Floor Price:
        <span>{" " + stats?.floorPrice}</span>
      </p>
      <div>
        <p>
          Supply:
          <span>{" "+ stats?.supply}</span>
        </p>
      </div>
    </div>
  );
};

export default BitblocksDetailsView;
