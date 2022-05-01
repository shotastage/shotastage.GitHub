import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Import pages
const App = React.lazy(() =>
  import('../App').then((module) => ({
    default: module.default,
  })),
);

const Sitemap = React.lazy(() =>
  import('../pages/Sitemap').then((module) => ({
    default: module.default,
  })),
);

const SKESystem = React.lazy(() =>
  import('../pages/SKESystem').then((module) => ({
    default: module.default,
  })),
);

const SKECredential = React.lazy(() =>
  import('../pages/SKECredential').then((module) => ({
    default: module.default,
  })),
);

const Exchanger = React.lazy(() =>
  import('../pages/Exchanger').then((module) => ({
    default: module.default,
  })),
);

const Admin = React.lazy(() =>
  import('../pages/Admin').then((module) => ({
    default: module.default,
  })),
);

const Components = React.lazy(() =>
  import('../pages/Components').then((module) => ({
    default: module.default,
  })),
);

const SkillsDetail = React.lazy(() =>
  import('../pages/SkillsDetail').then((module) => ({
    default: module.default,
  })),
);

type Props = {
  children: React.ReactNode;
};

const RoutePage = (props: Props) => {
  return <Suspense fallback={<div />}>{props.children}</Suspense>;
};

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <RoutePage>
              <App />
            </RoutePage>
          }
        />
        <Route
          path='/sitemap'
          element={
            <RoutePage>
              <Sitemap />
            </RoutePage>
          }
        />
        <Route
          path='/ske_sys'
          element={
            <RoutePage>
              <SKESystem />
            </RoutePage>
          }
        />
        <Route
          path='/ske_credential'
          element={
            <RoutePage>
              <SKECredential />
            </RoutePage>
          }
        />
        <Route
          path='/exchanger'
          element={
            <RoutePage>
              <Exchanger />
            </RoutePage>
          }
        />
        <Route
          path='/admin'
          element={
            <RoutePage>
              <Admin />
            </RoutePage>
          }
        />
        <Route
          path='/components'
          element={
            <RoutePage>
              <Components />
            </RoutePage>
          }
        />
        <Route
          path='/skills'
          element={
            <RoutePage>
              <SkillsDetail />
            </RoutePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
