const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const HTML = new HTMLPlugin({
  template: path.resolve(process.cwd(), './src/client/index.html'),
  inject: 'body',
  filename: 'index.html'
});

const ExtractText = new ExtractTextPlugin({ filename: 'styles.css' });

const Clean = new CleanPlugin(
  [path.resolve(process.cwd(), 'build')],
  { allowExternal: true }
);

const styleLoader = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    {
      loader: 'css-loader',
      options: {
        localIdentName: '[name]__[local]___[hash:base64:5]',
        modules: true,
        minimize: true,
        sourceMap: true
      }
    },
    'resolve-url-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
});

module.exports = {
  entry: path.resolve(process.cwd(), './src/client/index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: styleLoader
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.ttf$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  plugins: [Clean, HTML, ExtractText]
}; 
