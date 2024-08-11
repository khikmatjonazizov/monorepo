import { type Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const BuildDevServer = (option: BuildOptions): Configuration => {
  const { port } = option;
  return {
    port,
    historyApiFallback: true,
    open: true,
  }
}