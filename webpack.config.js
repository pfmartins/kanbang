"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //devtool: "eval-source-map", //para renderizar o codigo exatamente como é (sem utilizar)
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "kanban.js",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    allowedHosts: "all",
    historyApiFallback: true,
    port: 3030,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};