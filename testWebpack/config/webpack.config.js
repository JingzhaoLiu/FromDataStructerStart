const path = require("path");
const config = {
  mode: "development",
  context: path.resolve(__dirname, "../"),
  // entry: "./src/index.js",
  // entry: {
  //   // 打包入口地址
  //   foo: "./src/index.js",
  //   bar: "./src/test.js",
  //   //   // ...

  // },
  entry: ["./src/index.css"],

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
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
  // plugins: [],
  // // development, production or none
  // // default value production
  // mode: "development",
};

module.exports = config;
