import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`font-sans ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default MyApp;
