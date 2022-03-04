import React, { Suspense } from "react";
import {
  Route,
  Routes,
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

const Exchanger = React.lazy(() =>
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
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div />}>
            <App />
          </Suspense>
        } />
        <Route path="/sitemap" element={
          <Suspense fallback={<div />}>
            <Sitemap />
          </Suspense>
        } />
        <Route path="/ske_sys" element={
          <Suspense fallback={<div />}>
            <SKESystem />
          </Suspense>
        } />
        <Route path="/ske_credential" element={
          <Suspense fallback={<div />}>
            <SKECredential />
          </Suspense>
        } />
        <Route path="/exchanger" element={
          <Suspense fallback={<div />}>
            <Exchanger />
          </Suspense>
        } />
        <Route path="/admin" element={
          <Suspense fallback={<div />}>
            <Admin />
          </Suspense>
        } />
        <Route path="/components" element={
          <Suspense fallback={<div />}>
            <Components />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
