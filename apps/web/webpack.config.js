module.exports = {
  entry: "./web/static/js/app.js",
  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.elm']
  },
  module: {
    noParse: /\.elm$/,
    loaders: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
  //
  // module: {
  //   loaders: [
  //     {
  //       test: /\.html$/,
  //       exclude: /node_modules/,
  //       loader: 'file?name=[name].[ext]'
  //     },
  //     {
  //       test: /\.elm$/,
  //       exclude: [/elm-stuff/, /node_modules/],
  //       loader: './index.js'
  //     }
  //   ],
  //
  //   noParse: /\.elm$/
  // }
};
