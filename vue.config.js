const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    externals: [
      'vue',
      'hls.js',
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })]
    }
  }
}
