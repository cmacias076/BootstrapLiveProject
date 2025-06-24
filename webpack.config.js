const path = require('path');
const { use } = require('react');
module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(gif|jpg|jpeg|png)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  }
}
