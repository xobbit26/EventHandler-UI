const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/main.js',

	output: {
		path: path.resolve(__dirname, './public/build'),
		publicPath: 'build/',
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.js.map'
	},

	devServer: {
		contentBase: path.join(__dirname, './public'),
		filename: 'index.html',
		compress: true,
		port: 8097
	},

	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: [/node_modules/, /public/],
				use: [
					{
						loader: 'babel-loader',
						options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
            },
			{
				test: /\.less$/,
                use: [
					'style-loader',
                    'css-loader', 
                    'less-loader'
                ],
			},
            {
                test:/\.json$/,
                loader: "json-loader",
            }
		]
	},
};