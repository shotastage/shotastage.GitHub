
import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Import pages
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
