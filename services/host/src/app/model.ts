import { router } from "@/shared/config/routing";
import { appStarted } from "@/shared/config/system";
import { createEffect, sample } from "effector";
import { createBrowserHistory } from "history";

const createHistoryFx = createEffect(createBrowserHistory);

sample({
  clock: appStarted,
  target: createHistoryFx,
})

sample({
  clock: createHistoryFx.doneData,
  target: router.setHistory,
})