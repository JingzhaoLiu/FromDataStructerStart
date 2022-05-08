const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  // // development, production or none
  // // default value production
  mode: "development",
  context: path.resolve(__dirname, "../"),
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // // plugins:
  plugins: [
    // 配置插件
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
};

module.exports = config;
