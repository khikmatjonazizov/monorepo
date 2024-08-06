import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";

export const routes = {
  admin: createRoute(),
};

export const routesMap = [
  {
    path: '/admin',
    route: routes.admin,
  }
]

export const routerControls = createRouterControls();

export const router = createHistoryRouter({
  controls: routerControls,
  routes: routesMap,
})
