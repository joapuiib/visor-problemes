// webpack.config.js

var path = require('path')
var webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    site: ['./assets/javascripts/site.js', './assets/stylesheets/site.scss'],
    slides: ['./assets/javascripts/slides.js', './assets/stylesheets/slides.css'],
    document: ['./assets/javascripts/document.js', './assets/stylesheets/document.css'],
    exam: ['./assets/javascripts/exam.js']
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: 'javascripts/[name].js'
  },
  // optimization: {
  //   minimize: false
  // },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        // use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        use: [
               {
                 loader: MiniCssExtractPlugin.loader, 
                 options: {
                   publicPath: ''
                 }
               },
               'css-loader', 
               'sass-loader'
             ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
    ]
  },
  resolve:{
    fallback: { "crypto": false }
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: 'stylesheets/[name].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
  ]
}
