// webpack.config.js

var path = require('path')
var glob = require('glob')
var webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  mode: 'production',
  // entry: glob.sync('./assets/**/**.*').reduce(function(obj, el){
  //    obj[path.parse(el).name] = el;
  //    return obj
  // },{}),
  entry: {
      // site: ["./assets/javascripts/site.js", "./assets/stylesheets/site.scss"],
      site: "./source/stylesheets/site.scss",
      tab: ["./source/javascripts/tab.js", "./source/stylesheets/tab.css"],
      code: ["./source/javascripts/code.js", "./source/stylesheets/code.scss"]
  },
  output: {
    path: path.resolve(__dirname, '.dist'),
    filename: 'javascripts/[name].js',
    library: {
              name: "[name]",
              type: "window"
    },
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/, 
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        // use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        use: [
               {
                 loader: MiniCssExtractPlugin.loader, 
                 options: {
                   publicPath: '',
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
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({
        filename: 'stylesheets/[name].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
  ],
}
