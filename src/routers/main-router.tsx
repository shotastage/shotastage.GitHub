
import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Import pages
import App from "../App";
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
