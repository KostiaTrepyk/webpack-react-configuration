export interface BuildPaths {
	entry: string;
	output: string;
	html: string;
	src: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
	port: number;
	paths: BuildPaths;
	mode: BuildMode;
}