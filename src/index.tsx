import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./routers/main-router";
import NormalizeCSS from 'normalize-css.ts';
import { GlobalStyle } from "./styles/globalStyle";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NormalizeCSS />
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
