import { appStarted } from '@/shared/config/system';
import './style/global.scss';
import './model';
import { RouterProvider } from 'atomic-router-react';
import { router } from '@/shared/config/routing';
import { Routing } from '@/pages/routing';

appStarted()

export const App = () => {
  return (
    <RouterProvider router={router}>
      <Routing />
    </RouterProvider>
  )
}