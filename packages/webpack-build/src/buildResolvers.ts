import { type Configuration } from 'webpack';

export const buildResolvers = (): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }
}