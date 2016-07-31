const {join} = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'es2016']
        }
      }
    ]
  }
}
