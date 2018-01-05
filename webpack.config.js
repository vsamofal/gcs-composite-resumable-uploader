const path = require('path');

module.exports = {
  entry: './src/GcsCompositeUploader',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'gcs-composite-file-uploader.js',
    library: 'gcs-composite-file-uploader',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
