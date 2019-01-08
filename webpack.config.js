const path = require('path');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output:{
    path: path.resolve(__dirname,'src'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
