const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Defining path constants
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
};

// Webpack configuration
module.exports = {
  entry: './index.js',
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: paths.SRC
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
