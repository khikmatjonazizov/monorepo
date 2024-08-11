import { type Configuration, ProgressPlugin, DefinePlugin } from 'webpack';
import type { BuildOptions } from './types';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
  const { mode, paths, analyzer } = options;
  const isDev = mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new DefinePlugin({
      __MODE__: JSON.stringify(mode),
    })
  ];

  if(isDev) {
    plugins.push(
      new ProgressPlugin()
    )

    plugins.push(
      new ForkTsCheckerWebpackPlugin()
    )
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    )
  }

  if(analyzer) {
    plugins.push(
      new BundleAnalyzerPlugin()
    )
  }

  return plugins;
}