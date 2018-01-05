const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/GcsCompositeUploader' ],
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'gcs-composite-file-uploader.js',
    library: 'GcsCompositeUploader',
    libraryTarget: 'amd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
    ],
  },
};
