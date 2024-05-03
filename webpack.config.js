const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	// mode: 'production',
	mode: 'development',
	devtool: 'inline-source-map',

	entry: {
		contentScript: '/src/contentScript/contentScript.js',
		backgroundScript: '/src/backgroundScript/backgroundScript.js',
	},

	performance: {
		maxEntrypointSize: 5000000,
		maxAssetSize: 5000000,
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		crossOriginLoading: 'anonymous',
		// clean: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};


