export type BuildOptions = {
  port: number;
  mode: BuildMode;
  paths: BuildPaths;
  analyzer?: boolean;
}

export type BuildMode = 'production' | 'development';

export type BuildPaths = {
  output: string;
  entry: string;
  public: string;
  src: string;
  html: string;
}