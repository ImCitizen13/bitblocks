import axios from "axios";

export async function GetMagicEdenTokensForInscription(
  tokenInscriptions: string[],
) {
  const DEFAULT_ADDRESS =
    "580b6a42e60488b0f2f2f67182cede861ca01872ae464c9f0698fec28284dc27i0";
  const REQUEST_TOKEN_KEY = "?tokenIds=";
  const DEFAULT_REQUEST = REQUEST_TOKEN_KEY + DEFAULT_ADDRESS;
  const tokensArray = tokenInscriptions
    .map((tokenInscription) => {
      return REQUEST_TOKEN_KEY + tokenInscription;
    })
    .toString()
    .replaceAll(",", "");
  const axiosClient = axios.create({
    baseURL: `https://api-mainnet.magiceden.io/v2/ord/btc/tokens${DEFAULT_REQUEST + tokensArray}&showAll=true&sortBy=priceAsc`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return axiosClient.get("").then((response) => response.data);
}

//https://api-mainnet.magiceden.io/v2/ord/btc/tokens?tokenIds=580b6a42e60488b0f2f2f67182cede861ca01872ae464c9f0698fec28284dc27i0&tokenIds=9dfa864ee4a20ad5f2484069264367979bf19f4ff2ce5ad7846bf4df864ca2cfi0&showAll=true&sortBy=priceAsc
//https://api-mainnet.magiceden.io/v2/ord/btc/tokens?tokenIds=580b6a42e60488b0f2f2f67182cede861ca01872ae464c9f0698fec28284dc27i0&tokenIds=''&showAll=true&sortBy=priceAsc

//https://api-mainnet.magiceden.io/v2/ord/btc/tokens&tokenIds=a21b8132acc157b5caba2a8074af8d87bce645848515d8bc62ca6c410c2266c7i0&tokenIds=1a2824ee84f159b64882a2466098806a07f3aa0cd9f34fbe5d5843c9f756833bi0&showAll=true
//https://api-mainnet.magiceden.io//v2/ord/btc/tokens?tokenIds=a21b8132acc157b5caba2a8074af8d87bce645848515d8bc62ca6c410c2266c7i0&tokenIds=e7b1abacc3a1f4ccb5020213266e16d84e140186788009d7959f7d4465e0b764i0&tokenIds=1a2824ee84f159b64882a2466098806a07f3aa0cd9f34fbe5d5843c9f756833bi0&tokenIds=51575372525de3cc54b25ff6725c1ed06281d123296de50089c934bbd607ac2ai0&tokenIds=66200cd4249b8925c67c89ba2e62735c352d9a2cb61829747949d2cf73da6de8i0&tokenIds=d957405f6759da95cb0f10531819d466a5b6fb54917b9903224fddd11e1b45f4i0&tokenIds=59eb9929ca61d2474d68f045b17dbc83874a76c4c4eb213b1d42e2c244cdf09di0&tokenIds=197efade9720bc6522cb23ba25831fe2089a6dddb648c2b495a19cd1b3231cd5i0&tokenIds=dffa0cc9a32933724af87ee91acd4ffe621f4f1801d78a765b0f9ad6fbfe1c94i0&tokenIds=b10b1f15a813916a5bef6165956bfa3f2e380d885cf0caa6af3e65b7778b6965i0&tokenIds=4c556b0960061cb4fdafbb741ea3b8e6b459b9cf1b25f58846ad525619bd8744i0&tokenIds=2b1243abaa5a1d450d887c632ab0d38c5420a9f313cbbadec2c0b8cabcc5dbc2i0&showAll=true
//https://api-mainnet.magiceden.io//v2/ord/btc/tokens?tokenIds=a21b8132acc157b5caba2a8074af8d87bce645848515d8bc62ca6c410c2266c7i0&tokenIds=1a2824ee84f159b64882a2466098806a07f3aa0cd9f34fbe5d5843c9f756833bi0&showAll=true

//https://api-mainnet.magiceden.io//v2/ord/btc/tokens?tokenIds=a21b8132acc157b5caba2a8074af8d87bce645848515d8bc62ca6c410c2266c7i0&tokenIds=e7b1abacc3a1f4ccb5020213266e16d84e140186788009d7959f7d4465e0b764i0&tokenIds=51575372525de3cc54b25ff6725c1ed06281d123296de50089c934bbd607ac2ai0&tokenIds=66200cd4249b8925c67c89ba2e62735c352d9a2cb61829747949d2cf73da6de8i0&tokenIds=59eb9929ca61d2474d68f045b17dbc83874a76c4c4eb213b1d42e2c244cdf09di0&tokenIds=dffa0cc9a32933724af87ee91acd4ffe621f4f1801d78a765b0f9ad6fbfe1c94i0

//https://api-mainnet.magiceden.io//v2/ord/btc/tokens?tokenIds=1a2824ee84f159b64882a2466098806a07f3aa0cd9f34fbe5d5843c9f756833bi0&tokenIds=d957405f6759da95cb0f10531819d466a5b6fb54917b9903224fddd11e1b45f4i0&tokenIds=197efade9720bc6522cb23ba25831fe2089a6dddb648c2b495a19cd1b3231cd5i0&tokenIds=4c556b0960061cb4fdafbb741ea3b8e6b459b9cf1b25f58846ad525619bd8744i0&tokenIds=b10b1f15a813916a5bef6165956bfa3f2e380d885cf0caa6af3e65b7778b6965i0&tokenIds=2b1243abaa5a1d450d887c632ab0d38c5420a9f313cbbadec2c0b8cabcc5dbc2i0

// https://api-mainnet.magiceden.io//v2/ord/btc/tokens?tokenIds=6d4d6a9b569c3af500f75c0b26c96c0002760f1a906ab48d5d54ead888839b2fi0&tokenIds=47130001d20b6b1f087a4f9d8dc67f9253557c335663f2b4178ca5e0d831338ei0&tokenIds=da6dd7459ed3e77aa85fc27e32b941242fd6dde2a623329872a80d977f414b14i0&tokenIds=6686417ec7f2f8033da9757946c496c136d75ade2bd0ac183cff331acb7e0f11i0&tokenIds=ce1cc51772c79ab76c5f349cef351b425d9d69ef03b2f7189dbc9334ed6f88cfi0&tokenIds=4d72940b21478d1ab4bd12a092416d213cf8f4bac67af86263949a16189bbc70i0&tokenIds=3a7f0c5f3c0d1f3f15dbb67c8a1224bc6a17aacf6f9bbc39351832474b38968ai0

//?tokenIds=6d4d6a9b569c3af500f75c0b26c96c0002760f1a906ab48d5d54ead888839b2fi0
//&tokenIds=47130001d20b6b1f087a4f9d8dc67f9253557c335663f2b4178ca5e0d831338ei0
//&tokenIds=da6dd7459ed3e77aa85fc27e32b941242fd6dde2a623329872a80d977f414b14i0
//&tokenIds=6686417ec7f2f8033da9757946c496c136d75ade2bd0ac183cff331acb7e0f11i0
//&tokenIds=ce1cc51772c79ab76c5f349cef351b425d9d69ef03b2f7189dbc9334ed6f88cfi0
//&tokenIds=4d72940b21478d1ab4bd12a092416d213cf8f4bac67af86263949a16189bbc70i0
//&tokenIds=3a7f0c5f3c0d1f3f15dbb67c8a1224bc6a17aacf6f9bbc39351832474b38968ai0

// https://api-mainnet.magiceden.io//v2/ord/btc/tokens?tokenIds=89b214261f3a32fc92efaba5d9e75fe8495bf3d526c81625124ec35c95cbb66fi0&tokenIds=0819e7c52a3d59bef1223de73bdfde2627521cc1de1150fa94dbfb473cd6bea5i0&tokenIds=1114dbc4b7d9a64c40fdb8d9f89a8be045b8843519d169be1c136d5fe1f352f6i0&tokenIds=1908cfd74c89039931aa01da746ca48704642cb0ebd7d1acc66cdf3782802b63i0&tokenIds=cabc81c4a6de1f74943acfccfd797473e1eb2a9d37272e53b27366ce6240b615i0&tokenIds=addacd57121fc85a11fb3310a212b71786712b89a2d9b7a4c175b19d2ba9238di0&tokenIds=1ab127397409c408d7341a2fb32054192a55dce7ae79decdf3c6e3567f854144i0
