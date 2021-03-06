const path = require('path');

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
				test: /\.(css)?&/,
				exclude: [/node_modules/, /public/],
				loader: 'css-loader'
			},
			{
				test: /\.(less)?&/,
				loader: 'less-loader'
			},
            {
                test:/\.json$/,
                loader: "json-loader",
            }
		]
	},
};