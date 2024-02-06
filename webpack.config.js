const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {
	return {
		//mode: 'production',
		mode: 'development',
		entry: ['./src/index.js'],
		output: {
			path: path.resolve(__dirname, './build'),
			filename: 'js/bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.js$/, 
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [['@babel/preset-react',{
								runtime: 'automatic',
							  }], '@babel/preset-env'],
						},
					},
				},
				{
					test: /\.css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader'],
				},
				{
					test: /\.svg$/,
					loader: 'svg-inline-loader'
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
				filename: 'index.html',
				inject: true,
				minify: true,
				favicon: './public/favicon.ico',
			}),
			new MiniCssExtractPlugin({
				filename: './css/index.css',
			}),
		],
	};
};

// module.exports = {
// 	//mode: 'production',
// 	mode: 'development',
// 	entry: ['./src/index.js'],
// 	output: {
// 		path: path.resolve(__dirname, './build'),
// 		filename: 'js/bundle.js',
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/, 
// 				exclude: /node_modules/,
// 				use: {
// 					loader: 'babel-loader',
// 					options: {
// 						presets: [['@babel/preset-react',{
// 							runtime: 'automatic',
// 						  }], '@babel/preset-env'],
// 					},
// 				},
// 			},
// 			{
// 				test: /\.css$/,
// 				use: [MiniCssExtractPlugin.loader, 'css-loader'],
// 			},
//             {
//                 test: /\.svg$/,
//                 loader: 'svg-inline-loader'
//             },
// 		],
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			template: './public/index.html',
// 			filename: 'index.html',
// 			inject: true,
// 			minify: true,
// 			favicon: './public/favicon.ico',
// 		}),
// 		new MiniCssExtractPlugin({
// 			filename: './css/index.css',
// 		}),
// 	],
// };