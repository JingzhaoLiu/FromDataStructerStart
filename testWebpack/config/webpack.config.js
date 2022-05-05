const path = require("path");
const config = {
  context: path.resolve(__dirname, "../"),
  // entry: "./src/index.js",
  entry: {
    //   foo: "./src/index.js",
    //   bar: "./src/test.js",
    //   // ...
    main: ["./src/index.js", "./src/test.js"],
  },

  // output: {
  //   path: path.resolve(__dirname, "../dist"),
  //   filename: "bundle.js",
  // },
  // Loaders
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       loader: "vue-loader",
  //     },
  //   ],
  // },
  // // plugins:
  // plugins: [],
  // // development, production or none
  // // default value production
  // mode: "development",
};

module.exports = config;
