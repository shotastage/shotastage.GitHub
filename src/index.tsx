import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import Router from "./routers/main-router";
import NormalizeCSS from 'normalize-css.ts';
import { GlobalStyle } from "./styles/globalStyle";
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  ${NormalizeCSS}
  ${GlobalStyle}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
