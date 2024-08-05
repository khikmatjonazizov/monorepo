import { type Configuration } from "webpack";
import { BuildOptions } from "./types";

export const buildResolvers = ({ paths }: BuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': paths.src
    }
  }
}