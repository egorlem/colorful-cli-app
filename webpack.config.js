const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const cssLoader = (ext) => {
  const config = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        reloadAll: true,
      },
    },
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        plugins: [autoprefixer()],
      },
    },
  ];
  if (ext) {
    config.push(ext);
  }
  return config;
};
const babelLoader = (ext) => {
  const config = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      "@babel/plugin-syntax-class-properties",
      "@babel/plugin-proposal-class-properties",
    ],
  };

  if (ext) {
    config.presets.push(ext);
  }
  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelLoader(),
        },
      },
      {
        test: /\.css$/i,
        use: cssLoader(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoader("sass-loader"),
      },
      {
        test: /\.(ttf|eot|woff)$/,
        use: ["file-loader"],
      },
    ],
  },
};
