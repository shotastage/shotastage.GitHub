import type { AppProps } from "next/app";
import "normalize.css";
import "../styles/global.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../libs/apollo-client";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps}>
        {" "}
      </Component>
    </ApolloProvider>
  );
}

export default MyApp;
