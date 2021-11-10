import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Import pages
import App from "../App";
import Sitemap from "../pages/Sitemap";
import SKESystem from '../pages/SKESystem';
import SKECredential from '../pages/SKECredential';


const Router: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/sitemap" component={Sitemap} />
        <Route exact path="/ske_sys" component={SKESystem} />
        <Route exact path="/ske_credential" component={SKECredential} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
