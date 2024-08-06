import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";
// @ts-ignore
import { routesMap as adminRoutesMap, routes as adminRoutes } from 'admin/routesMap';

export const routes = {
  home: createRoute(),
  ...adminRoutes
};

export const routesMap = [
  {
    path: '/',
    route: routes.home,
  },
  ...adminRoutesMap,
]

export const routerControls = createRouterControls();

export const router = createHistoryRouter({
  controls: routerControls,
  routes: routesMap,
})
