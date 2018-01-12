const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            "react",
            ["es2015", { modules: false }],
            "stage-2",
          ],
          plugins: [
            'transform-decorators-legacy',
          ],
          babelrc: false
        }
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ]
}
