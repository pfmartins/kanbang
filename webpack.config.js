'use strict';

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    devServer: {
        allowedHosts: "all",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ inject: true, template: 'public/index.html' })],
}