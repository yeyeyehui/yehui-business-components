const webpack = require("webpack");

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const entryHtml = "./static/index.html";

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/main.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash:5].js",
  },
  devServer: {
    static: path.join(__dirname, "static"),
    host: "localhost",
    open: true,
    hot: true,
    watchFiles: ["src/**/*.js", "src/**/*.ts", "src/**/*.jsx", "src/**/*.tsx"],
    // historyApiFallback: {
    //   index: entryHtml,
    // },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve("src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: entryHtml,
      // filename: "index.[hash:5].html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
