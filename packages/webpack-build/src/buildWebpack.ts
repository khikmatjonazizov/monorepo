import { type Configuration } from 'webpack';
import type { BuildOptions } from './types';
import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import { buildPlugins } from './buildPlugins';
import { BuildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export const buildWebpack = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;
  const isDev = mode === 'development';

  const config: Configuration = {
    devServer: BuildDevServer(options),
    plugins: buildPlugins(options),
    mode,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[filename].[contenthash:8].js',
      clean: true,
    },
    devtool: isDev && 'inline-source-map',
  }

  return config;
}