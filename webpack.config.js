module.exports = {
  context: __dirname + "/",
  entry: {
    bundleA: "path/to/file.js",
    bundleB: "path/to/file.js"
  },
  output: {
    path: __dirname + "/path/to/dist",
    filename: "[name]-bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/, // /\.jsx?$/
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  devtool: 'source-map'
};