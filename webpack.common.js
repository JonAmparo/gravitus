const polyfill = require('@babel/polyfill');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './client/App.js'],
    vendor: './client/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|svg|jpg|jpeg|gif|ico)$/,
        use: {
          loader: 'file-loader',
          // loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'assets/images'
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            ]
          }
        }
      }
    ]
  }
};
