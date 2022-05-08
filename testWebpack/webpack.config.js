const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack")

const config = {
  // // development, production or none
  // // default value production
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  // Loaders
  module: {
    rules: [
      // {
      //   test: /\.s[ac]ss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  // // plugins:
  plugins: [
    // 配置插件
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(), // 引入插件
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: "auto",
    open: true,
  },
  
};

module.exports = config;
