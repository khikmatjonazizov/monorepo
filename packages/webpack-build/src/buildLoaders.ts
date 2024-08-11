import { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (option: BuildOptions): RuleSetRule[] => {
  const { mode } = option;
  const isDev = mode === 'development';

  const assetLoader: RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: mode,
        }
      }
    ]
  }

  const cssLoader: RuleSetRule = {
    test: /.css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
    ]
  }

  return [tsLoader, cssLoader, assetLoader];
}