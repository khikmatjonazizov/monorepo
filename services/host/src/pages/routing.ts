import { createRoutesView } from "atomic-router-react";
import { HomePage } from "./home/ui";
import { routes } from "@/shared/config/routing";
// @ts-ignore
import { routesViewMap as adminRoutesViewMap } from "admin/routesViewMap";

export const Routing = createRoutesView({
  routes: [
    {
      view: HomePage,
      route: routes.home,
    },
    ...adminRoutesViewMap,
  ],
})