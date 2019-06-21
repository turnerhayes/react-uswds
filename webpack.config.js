const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],

	module: {
		rules: [
			{
				test: /.(ts|tsx)?$/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/]
			},

			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				]
			},

			{
				test: /\.(svg|jpe?g|png)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},

	devtool: "inline-source-map",

	devServer: {
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [
			"node_modules",
			path.join(
				require.resolve("uswds"),
				"src",
				"stylesheets",
			),
		]
	}
};
