import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";

export const routes = {
  home: createRoute(),
};

export const routesMap = [
  {
    path: '/',
    route: routes.home,
  }
]

export const routerControls = createRouterControls();

export const router = createHistoryRouter({
  controls: routerControls,
  routes: routesMap,
})
