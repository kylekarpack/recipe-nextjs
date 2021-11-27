import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import Main from "components/Main";
import { useApollo } from "lib/apolloClient";
import { CookingStateContextProvider } from "lib/hooks";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

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
          <CookingStateContextProvider>
            <Main>
              <Component {...pageProps} />
            </Main>
          </CookingStateContextProvider>
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
