const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',

	output: {
		filename: 'react-uswds.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'ReactUSWDS',
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

	externals: {
		// Don't bundle react or react-dom      
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React",
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "ReactDOM",
			root: "ReactDOM",
		},
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
