export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export type BuildMode = 'production' | 'development';

export type BuildOptions = {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer: boolean;
}