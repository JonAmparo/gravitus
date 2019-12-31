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
      template: './src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'), //serve your static files from here
    watchContentBase: true,
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/auth'], // can have multiple
        target: 'http://localhost:8080', // server and port to redirect to
        secure: false
      }
    ],
    port: 3030, // port webpack-dev-server listens to, defaults to 8080
    overlay: {
      // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: false, // defaults to false
      errors: false // defaults to false
    }
    // port: 3000,
    // open: true
    // proxy: {
    //   '^/api*': {
    //     target: 'http://localhost:3000/api',
    //     secure: false
    //   }
    // }
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
