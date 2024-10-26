import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions, RuleSetRule } from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";

import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
	const { mode } = options;

	const isDev = mode === "development";

	const assetLoader: RuleSetRule = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: "asset/resource",
	};

	const svgLoader: RuleSetRule = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [
			{
				loader: "@svgr/webpack",
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: "convertColors",
								params: {
									currentColor: true,
								},
							},
						],
					},
				},
			},
		],
	};

	const cssLoader: RuleSetRule = {
		loader: "css-loader",
		options: {
			modules: {
				localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:12]",
			},
		},
	};

	const tsLoader: RuleSetRule = {
		test: /\.tsx?$/,
		exclude: /node_modues/,
		use: [
			{
				loader: "ts-loader",
				options: {
					getCustomTransformers: () => ({
						before: [isDev ? ReactRefreshTypeScript() : false].filter(Boolean),
					}),
					transpileOnly: true,
				},
			},
		],
	};

	const sassLoader: RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			cssLoader,
			"sass-loader",
		],
	};

	return [assetLoader, svgLoader, tsLoader, sassLoader];
}
