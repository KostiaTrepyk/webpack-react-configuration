import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
	const { mode, paths } = options;

	const isProd = mode === "production";
	const isDev = mode === "development";

	const plugins: Configuration["plugins"] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
	];

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: "css/[name].[contenthash:8].css",
				chunkFilename: "css/[name].[contenthash:8].css",
			})
		);
	}

	if (isDev) {
		plugins.push(new ForkTsCheckerWebpackPlugin());
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	return plugins;
}
