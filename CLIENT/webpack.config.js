const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js ",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};

const otherConfig = {
  entry: {
    "bundle.js": glob
      .sync("build/static/?(js|css)/*.?(js|css)")
      .map((f) => path.resolve(__dirname, f)),
  },
  output: {
    filename: "build/static/js/bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new UglifyJsPlugin()],
};
