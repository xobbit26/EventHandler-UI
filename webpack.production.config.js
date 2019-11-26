const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './public/build'),
        publicPath: '/',
        filename: 'bundle.min.js',
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        inline: true
                    }
                }
            }),
        ]
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
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                {
                                    plugins: ['@babel/plugin-proposal-class-properties']
                                }
                            ]
                        }
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
                test: /\.json$/,
                loader: "json-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        })
    ],
};