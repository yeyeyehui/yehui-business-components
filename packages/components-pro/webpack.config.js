const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack = require("webpack");

const cwd = process.cwd();

const entryHtml = "./static/index.html";

const NODE_ENV = process.env.NODE_ENV;

let isProduction = NODE_ENV === "production";

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.ts",
  stats: {
    assets: false,
    modules: false,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash:5].js",
    clean: true,
    library: "yehui-business-components",
    libraryTarget: "umd",
  },
  devServer: {
    static: path.join(__dirname, "static"),
    host: "localhost",
    open: true,
    hot: true,
    watchFiles: ["src/**/*.js", "src/**/*.ts", "src/**/*.jsx", "src/**/*.tsx"],
    historyApiFallback: {
      index: entryHtml,
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve("src"),
      "yehui-business-components": cwd,
    },
  },
  // externals: {
  //   react: {
  //     root: "React",
  //     commonjs2: "react",
  //     commonjs: "react",
  //     amd: "react",
  //   },
  //   "react-dom": {
  //     root: "ReactDOM",
  //     commonjs2: "react-dom",
  //     commonjs: "react-dom",
  //     amd: "react-dom",
  //   },
  //   antd: {
  //     root: "antd",
  //     commonjs2: "antd",
  //     commonjs: "antd",
  //     amd: "antd",
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              modules: "auto",
              targets: {
                browsers: ["last 2 versions", "Firefox ESR", "> 1%", "ie >= 11"],
              },
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: false,
                  },
                ],
              ],
              plugins: [
                [
                  "@babel/plugin-transform-typescript",
                  {
                    isTSX: true,
                  },
                ],
                [
                  "@babel/plugin-transform-runtime",
                  {
                    corejs: 3,
                    helpers: true,
                    regenerator: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.png$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 32,
          },
        },
      },

      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: entryHtml,
      // filename: "index.[hash:5].html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProgressPlugin(),
  ],
};
