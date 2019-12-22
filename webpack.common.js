const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
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
          // loader: 'file-loader',
          loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
          options: {
            name: '[name].[hash].[ext]', //
            outputPath: 'assets/images' //
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

// Working copy

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
// mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
// devtool: 'none', // Makes /dist/main.js readable
//   entry: './src/index.js',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//               {
//                 plugins: ['@babel/plugin-proposal-class-properties']
//               }
//             ]
//           }
//         }
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.(eot|woff|woff2|ttf|png|svg|jpg|jpeg|gif|ico)$/,
//         loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader'
//           }
//         ]
//       }
//     ]
//   },
//   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//       filename: 'index.html',
//       favicon: 'public/favicon.ico'
//     })
//   ]
// };

// {
//   test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
//   use: ['file-loader?name=[name].[ext]']
// use: [
//   {
//     loader: 'file-loader'
//   }
// ]
// },
