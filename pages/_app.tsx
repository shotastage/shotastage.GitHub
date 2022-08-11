import "normalize.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";

const GlobalStyles = createGlobalStyle`
  ${GlobalStyle}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      {" "}
      <GlobalStyles />
    </Component>
  );
}

export default MyApp;
