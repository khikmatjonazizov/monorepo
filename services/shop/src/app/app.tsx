import { appStarted } from '@/shared/config/system';
import './style/global.scss';
import './model';

appStarted();

export const App = () => {
  return (
    <h1>Shop</h1>
  )
}