const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// Defining path constants
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
  SRC: path.resolve(__dirname, 'src')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
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
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}