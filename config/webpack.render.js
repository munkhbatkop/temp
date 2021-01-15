const path = require("path");

const HtmlPlugin = require("html-webpack-plugin");
const HtmlExternalsPlugin = require("html-webpack-externals-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;

const root = path.join(__dirname, ".."); // project root that contain package.json
const source = path.join(root, "source"); // path to source folder
const build = path.join(root, "build"); // path to build folder

module.exports = () => {
  const dev = process.env.development; // check mode is [development or production]

  // plugin 1
  const cleanWebpackPlugin = new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ["!main.js"] // means delete all files expect main.js
  }); // this will delete file and folder specified
  // plugin 2
  const htmlPlugin = new HtmlPlugin({
    filename: "index.html",
    template: "index.html",
    cache: true,
  }); // simplifies creation of HTML files to serve your webpack bundles
  // plugin 3
  const htmlExternalsPlugin = new HtmlExternalsPlugin({
    cwpOptions: {context: path.join(root, "node_modules")},
    externals: [
      {
        module: "react",
        global: "React",
        entry: dev ? "umd/react.development.js" : "umd/react.production.min.js"
      },
      {
        module: "react-dom",
        global: "ReactDOM",
        entry: dev ? "umd/react-dom.development.js" : "umd/react-dom.production.min.js"
      },
      {
        module: "react-router-dom",
        global: "ReactRouterDOM",
        entry: dev ? "umd/react-router-dom.js" : "umd/react-router-dom.min.js"
      },
    ]
  }); // to use pre-packaged vendor bundles like react.

  console.log(`build for render with ${dev ? "development" : "production"} mode \n`);

  return {
    context: path.join(source, "render"), // define root entry
    target: "electron-renderer",
    mode: dev ? "development" : "production",
    entry: {
      "polyfill": "@babel/polyfill", // left is the name | right is module explained in readme
      "render": "./index.js" // left is the name | right is the file in source/render folder
    },
    output: {
      filename: "[name].js", // the name is the one above which is polyfill or render
      path: build // path to build folder
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".css", ".scss"] // for files you want to import to your react app
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/,
          use: [{loader: 'url-loader?limit=100000'}]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env"
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime"
              ]
            }
          }
        },
      ] // rulers you can learn more about then in #https://webpack.js.org/configuration/module/#rule
    },
    devtool: dev ? "source-map" : false,
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
      "react-router-dom": "ReactRouterDOM",
      "fs": "require('fs')"
    },
    devServer: dev ? {
      contentBase: build,
      compress: true,
      hot: true,
      port: 9000
    } : undefined,
    plugins: [cleanWebpackPlugin, htmlPlugin, htmlExternalsPlugin] // plugins are define above
  };
};