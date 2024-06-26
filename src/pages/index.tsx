import BitblocksView from "components/BitblocksView";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b  to-[#15162c]">
        <BitblocksView />
      </main>
    </>
  );
}

//https://api-mainnet.magiceden.io/v2/ord/btc/tokens?collectionSymbol=bit-blocks&showAll=true&limit=100&offset=0&sortBy=priceAsc
//https://api-mainnet.magiceden.io/v2/ord/btc/stat?collectionSymbol=bit-blocks
