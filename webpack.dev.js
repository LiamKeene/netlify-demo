require("dotenv").config();

const merge = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge.smart(common, {
  devServer: {
    port: 3500,
    host: "0.0.0.0",
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true,
    historyApiFallback: true,
    publicPath: "http://localhost:3500/",
    public: "localhost:3500",
  },
  devtool: "inline-source-map",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    publicPath: "http://localhost:3500/",
  },
  watch: true,
});
