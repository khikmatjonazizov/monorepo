import webpack, { type Configuration } from 'webpack';
import { buildWebpack, type BuildPaths, type BuildMode } from '@packages/build-config'
import path from 'path';
import packageJson from './package.json';

type EnvVariables = {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariables): Configuration => {
  const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';
  const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002';

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  }

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer ?? false,
  });

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',
    remotes: {
      shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
      admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
    },
    shared: {
      ...packageJson.dependencies,
      'react': {
        eager: true,
        requiredVersion: packageJson.dependencies['react']
      },
      'atomic-router': {
        eager: true,
        requiredVersion: packageJson.dependencies['atomic-router'],
      },
      'atomic-router-react': {
        eager: true,
        requiredVersion: packageJson.dependencies['atomic-router-react'],
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom']
      },
      'history':{
        eager: true,
        requiredVersion: packageJson.dependencies['history']
      },
      'patronum': {
        eager: true,
        requiredVersion: packageJson.dependencies['patronum']
      },
      'effector': {
        eager: true,
        requiredVersion: packageJson.dependencies['effector']
      }
    }
  }))

  return config;
} 