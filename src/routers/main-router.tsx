import React, { Suspense } from "react";
import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Import pages
const App = React.lazy(() =>
  import('../App').then((module) => ({
    default: module.default,
  }))
);

const Sitemap = React.lazy(() =>
  import('../pages/Sitemap').then((module) => ({
    default: module.default,
  }))
);

const SKESystem = React.lazy(() =>
  import('../pages/SKESystem').then((module) => ({
    default: module.default,
  }))
);

const SKECredential = React.lazy(() =>
  import('../pages/SKECredential').then((module) => ({
    default: module.default,
  }))
);


const Loading: React.FC = () => {
  return <div />;
};

const Router: React.FC = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/sitemap" component={Sitemap} />
          <Route exact path="/ske_sys" component={SKESystem} />
          <Route exact path="/ske_credential" component={SKECredential} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
