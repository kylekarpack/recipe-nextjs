import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { createContext, useMemo, useState } from "react";
import Nav from "components/Nav";
import { useApollo } from "lib/apolloClient";

type CookingContext = {
  isCooking: boolean;
  setIsCooking: (isCooking: boolean) => void;
};

export const IsCookingContext = createContext<CookingContext>(null);

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const [isCooking, setIsCooking] = useState(false);
  const cooking = useMemo(() => ({ isCooking, setIsCooking }), [isCooking]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/180.png" rel="icon" type="image/png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/icons/180.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <meta name="theme-color" content="#8bd7f8" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider>
          <IsCookingContext.Provider value={cooking}>
            <Nav />
            <Component {...pageProps} />
          </IsCookingContext.Provider>
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
