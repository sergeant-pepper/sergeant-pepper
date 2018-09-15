const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const projectRootPath = path.join(__dirname, '..', '/');


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
    new CleanWebpackPlugin(['dist'], {
      root: projectRootPath,
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([{ from: 'public' }]),
    new HtmlWebpackPlugin({
      cache: true,
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[hash:10].css',
      chunkFilename: 'assets/[name].[chunkhash:10].css'
    })
  ],
  output: {
    filename: 'assets/[name].[hash:10].js',
    chunkFilename: 'assets/[name].[chunkhash:10].js',
    path: path.resolve(projectRootPath, 'dist'),
    publicPath: '/'
  }
};
