import { buildWebpack, type BuildMode, type BuildPaths } from '@packages/webpack-build';
import { type Configuration, container } from 'webpack';
import path from 'path';

type EnvVariables = {
  port?: number;
  mode?: BuildMode;
}

const WEBPACK_REMOTE_1_URL = 'http://localhost:3001';

export default (env: EnvVariables): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'index.ts'),
    public: path.resolve(__dirname, 'public'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    output: path.resolve(__dirname, 'build'),
  }
  const config = buildWebpack({
    paths,
    mode: env.mode ?? 'production',
    port: env.port ?? 3000,
  })

  config.plugins?.push(
    new container.ModuleFederationPlugin({
      name: 'webpack_host',
      filename: 'remoteEntry.js',
      remotes: {
        'webpack_remote': `webpack_remote@${WEBPACK_REMOTE_1_URL}/remoteEntry.js`
      },
      shared: {
        'react': {
          eager: true,
        },
        'react-dom': {
          eager: true,
        }
      }
    })
  )

  return config;
}