const webpack = require('webpack');
const UglifyJS = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new UglifyJS({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
