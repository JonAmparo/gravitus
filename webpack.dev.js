const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'), //serve your static files from here
    watchContentBase: true,
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api'], // can have multiple
        target: 'http://localhost:3001', // server and port to redirect to
        secure: false
      }
    ],
    port: 3000, // port webpack-dev-server listens to, defaults to 3001
    overlay: {
      warnings: false,
      errors: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader' //1. Turns sass into css
        ]
      }
    ]
  }
});
