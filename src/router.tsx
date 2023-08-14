import React from 'react';

import { useRoutes } from 'react-router-dom';

import type { RouteObject } from 'react-router-dom';

const Px = React.lazy(() => import('./pages/px'));
const Rem = React.lazy(() => import('./pages/rem'));


const routes: RouteObject[] = [
  { path: '/', element: <Px /> },
  { path: '/rem', element: <Rem /> },
];

const Router = () => {
  return useRoutes(routes);
};

export default Router;
