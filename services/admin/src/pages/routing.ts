import { createRoutesView } from "atomic-router-react";
import { routes } from "@/shared/config/routing";
import { AdminPage } from "./admin/ui";

export const routesViewMap = [
  {
    view: AdminPage,
    route: routes.admin,
  }
]

export const Routing = createRoutesView({
  routes: routesViewMap,
})