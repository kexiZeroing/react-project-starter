const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  // console.log(env, argv);
  // for dev: { WEBPACK_SERVE: true } { env: { WEBPACK_SERVE: true } }
  // for build: { WEBPACK_BUNDLE: true } { mode: 'production', env: { WEBPACK_BUNDLE: true } }
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    // This config is used for having a `public/index.html` and the bundle file is served at http://localhost:3000/dist/bundle.js
    // output: {
    //   path: path.resolve(__dirname, "dist/"),
    //   publicPath: "/dist/",
    //   filename: "bundle.js"
    // },
    // devServer: {
    //   contentBase: path.join(__dirname, "public/"),
    //   port: 3000,
    //   publicPath: "/dist/",
    //   hotOnly: true/
    // },
    
    // This config is used for `HtmlWebpackPlugin` which will generate a `index.html` serving at http://localhost:3000
    // `/react-project-starter/bundle.js` is used when deploy to Github Pages
    output: {
      path: path.resolve(__dirname, "dist/"),
      filename: "bundle.js",
      publicPath: argv.mode === "production" ? "/react-project-starter/" : "/",
    },
    devServer: {
      port: 3000,
      publicPath: "/",
      hotOnly: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: "React Starter",
        favicon: "./public/assets/favicon-32x32.png"
      })
    ]
  };
}