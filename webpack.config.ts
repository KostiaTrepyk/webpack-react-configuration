import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";
import path from "path";

interface EnvVariables {
	port?: number;
	mode?: BuildMode;
}

const config = (env: EnvVariables): webpack.Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		output: path.resolve(__dirname, "dist"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
	};

	const configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? "development",
		paths,
	});

	return configuration;
};

export default config;
