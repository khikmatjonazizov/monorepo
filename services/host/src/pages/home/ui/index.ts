import { routes } from "@/shared/config/routing";
import { createLazyPage } from "@/shared/lib/lazy-page";
import { withSuspense } from "@/shared/ui/with-suspense";
import { createRouteView } from "atomic-router-react";

const load = () => import('./ui');

const Page = createLazyPage({
  load,
  route: routes.home,
})

export const HomePage = createRouteView({
  view: withSuspense(Page),
  route: routes.home,
})