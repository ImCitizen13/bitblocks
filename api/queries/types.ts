export type OrdinalCollection = {
  name: string;
  icon_url: string;
  floor_price?: number;
  symbol?: string;
  ordinals: Ordinal[];
};

export type Ordinal = {
  name: string;
  id: string;
  image_url: string;
  contentType?: string;
  collectionImageURI?: string;
  ordinalCollection?: OrdinalCollection;
};

export type Wallet = {
  name: string;
  avatarUrl?: string;
  address: string;
  balance?: number;
  key: string;
  inscriptionBalance: number;
  inscriptions?: OrdinalCollection[];
};

export type User = {
  expoPushToken: string;
  platform: string;
}