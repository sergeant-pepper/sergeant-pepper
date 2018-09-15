const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const projectRootPath = path.join(__dirname, '/');


module.exports =  {
  entry: {
    app: './app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['html'], {
      root: path.resolve(projectRootPath, '..'),
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([{ from: 'public' }]),
    new HtmlWebpackPlugin({
      cache: true,
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    })
  ],
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.resolve(projectRootPath, '..', 'html'),
    publicPath: ''
  }
};
