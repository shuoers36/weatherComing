var path = require('path');
var webpack = require('webpack');
var px2rem = require('postcss-px2rem');

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: "bundle.js",
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      { 
        test: /\.css$/, 
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};