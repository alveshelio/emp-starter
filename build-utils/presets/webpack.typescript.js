module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loaders : 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
});
