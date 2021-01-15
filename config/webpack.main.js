const path = require("path");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const source = path.join(__dirname, "..", "source"); // path to source folder
const build = path.join(__dirname, "..", "build"); // path to build folder

module.exports = () => {
  const dev = process.env.development; // check mode is [development or production]

  // plugin 1
  const cleanWebpackPlugin = new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ["main.js"] // means delete only main.js
  }); // this will delete file and folder specified

  console.log(`build for main with ${dev ? "development" : "production"} mode \n`);

  return {
    context: path.join(source, "main"), // define root entry
    target: "electron-main",
    mode: dev ? "development" : "production",
    entry: {
      "main": "./index.js" // left is the name | right is the file in source/main folder
    },
    output: {
      filename: "[name].js", // the name is the one above which is main
      path: build // path to build folder
    },
    resolve: {
      extensions: [".js", ".json"] // for files you want to import to your electron app
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime"
              ]
            }
          }
        }
      ] // rulers you can learn more about then in #https://webpack.js.org/configuration/module/#rule
    },
    devtool: dev ? "source-map" : false,
    plugins: [cleanWebpackPlugin] // plugins are define above
  };
};
