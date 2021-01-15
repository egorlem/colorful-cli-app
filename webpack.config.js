const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const cssLoader = (ext) => {
  const config = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        reloadAll: true,
      },
    },
    'css-loader',
    {
      loader: 'postcss-loader',
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
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-syntax-class-properties',
      '@babel/plugin-proposal-class-properties',
    ],
  };

  if (ext) {
    config.presets.push(ext);
  }
  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './client/index.js',
    preloader: './client/preloader.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      chunks: ['preloader', 'index'],
    }),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    //new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'public'),
          to: 'public',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelLoader(),
        },
      },
      {
        test: /\.css$/i,
        use: cssLoader(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoader('sass-loader'),
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        loader: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'icons',
          },
        },
      },
    ],
  },
};
