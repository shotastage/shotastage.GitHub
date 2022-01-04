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

const  Exchanger = React.lazy(() =>
  import('../pages/Exchanger').then((module) => ({
    default: module.default,
  }))
);

const Admin = React.lazy(() =>
  import('../pages/Admin').then((module) => ({
    default: module.default,
  }))
);

const Components = React.lazy(() =>
  import('../pages/Components').then((module) => ({
    default: module.default,
  }))
);

const Router: React.FC<React.ReactNode> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/sitemap" component={Sitemap} />
          <Route exact path="/ske_sys" component={SKESystem} />
          <Route exact path="/ske_credential" component={SKECredential} />
          <Route exact path="/exchanger" component={Exchanger} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/components" component={Components} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
