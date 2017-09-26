
const pkg = require('./package');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
      'babel-polyfill',
      path.resolve(__dirname, 'src')
    ],
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.css', '.json'],
        modules: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules')
        ]
    },
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
                }),
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'content'),
      disableHostCheck: true,
      historyApiFallback: true,
      compress: true,
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
            title: 'Fantasy Dota 2',
            filename: 'index.html'
        }),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          VERSION: JSON.stringify(pkg.version)
      })
    ]
};
