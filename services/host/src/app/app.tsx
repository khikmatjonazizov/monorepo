import './style/global.scss';
import './model';
import { appStarted } from '@/shared/config/system';
import { Link, RouterProvider } from 'atomic-router-react';
import { router, routes } from '@/shared/config/routing';
import { Routing } from '@/pages/routing';

appStarted();

export const App = () => {
  return (
    <RouterProvider router={router}>
      <div>
        <Link style={{color: 'white'}} to={routes.home}>Home</Link>
      </div>
      <br />
      <div>
        <Link style={{color: 'white'}} to={routes.admin}>Admin</Link>
      </div>
      <Routing />
    </RouterProvider>
  )
}