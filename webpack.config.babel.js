import HtmlWebpackPlugin from 'html-webpack-plugin';

const DEFAULT_PORT = 3000;

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: __dirname.concat('/dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|react-commons|formulas-ui)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ],

          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ]
        }
      },

      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /(node_modules|formulas-ui|react-commons|bower_components|\.spec\.js)/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: '.eslintrc',
              emitError: true,
              emitWarning: true
            }
          }
        ]
      },

      {
        test: /\.(png|jpg|jpeg|tiff|woff|woff2|eot|svg|ttf)(\?v=(.*))?$/,
        loader: 'file-loader'
      },

      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },

      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html'
    })
  ],

  devServer: {
    hot: true,
    inline: true,
    contentBase: './dist',
    historyApiFallback: true,
    port: process.env.PORT || DEFAULT_PORT,
    proxy: {
      '/': {
        target: 'http://localhost:8080/'
      }
    }
  }
};
