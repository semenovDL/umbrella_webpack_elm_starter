const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const elmSource = __dirname + '/web/static/elm'
const env = process.env.MIX_ENV || 'dev'
const dev = env === 'dev'

const config = {
  context: __dirname + '/web/static',

  entry: [
    './css/app',
    './js/app',
    './elm/Main'
  ],

  output: {
    path: './priv/static',
    filename: 'js/app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass?includePaths[]=' + __dirname + '/node_modules'
        )
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack?cwd=' + elmSource
      }
    ],

    noParse: [/\.elm$/]
  },

  plugins: [
    // new CleanWebpackPlugin(['priv/static'], {
    //   root: __dirname,
    //   verbose: true,
    //   dry: false
    // }),
    new ExtractTextPlugin('css/app.css')
  ],

  resolve: {
    modulesDirectories: [
      'node_modules',
      __dirname + '/web/static/js'
    ],

    extensions: ['', '.sass', '.scss', '.css', '.js', '.elm']
  }
}

if (dev) {
  module.exports = merge(config, {
    devtool: 'eval'
    // devtool: 'cheap-inline-module-source-map'
  })
} else {
  module.exports = merge(config, {
    plugins: [
      // new CopyWebpackPlugin([{from: "./web/static/assets"}]),
      // new webpack.DefinePlugin({
      //   __PROD: env === 'prod',
      //   __DEV: dev
      // }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  })
}
