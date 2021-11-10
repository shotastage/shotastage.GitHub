import React, { useEffect } from "react";
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
import { initGA, useTracking } from '../utils/ga';


const Router: React.FC = () => {

  useEffect(() => {
    initGA();
  });

  useTracking();

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
