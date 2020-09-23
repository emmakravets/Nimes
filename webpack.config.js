const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  mode: `development`,
  entry: `./source/js/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `source`)
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, `source/js/modules`)
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: `babel-loader`,
      },
    ],
  },
  devtool: `source-map`,
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ]
};
