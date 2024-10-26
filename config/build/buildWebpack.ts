import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/types";
import { buildResolvers } from "./buildResolvers";

export function buildWebpack(options: BuildOptions): Configuration {
	const { mode, paths } = options;

	const isDev = mode === "development";

	return {
		mode: options.mode ?? "development",
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: "bundle.[contenthash].js",
			clean: true,
		},
		module: { rules: buildLoaders(options) },
		plugins: buildPlugins(options),
		resolve: buildResolvers(options),
		devServer: isDev ? buildDevServer(options) : undefined,
		devtool: isDev ? "inline-source-map" : undefined,
	};
}
