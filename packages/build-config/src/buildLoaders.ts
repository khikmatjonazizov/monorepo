import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypescript from 'react-refresh-typescript';

import { type RuleSetRule, type Configuration } from "webpack";
import { BuildOptions } from "./types";

export const buildLoaders = ({ mode }: BuildOptions): Configuration['module']['rules'] => {
  const isDev = mode === 'development';

  const assetLoader: RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const svgRLoader: RuleSetRule = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true
        }
      }
    ]
  }

  const scssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        "sass-loader",
    ],
  }

  const tsLoader: RuleSetRule = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypescript()].filter(Boolean)
          })
        }
      }
    ]
  };

  return [assetLoader, svgRLoader, scssLoader, tsLoader];
};
