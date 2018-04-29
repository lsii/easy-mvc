
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dir = require('./dir');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {

  mode: 'production',

  entry: [Path.join(Dir.view, 'main.js')],

  output: {
    path: Dir.public,
    publicPath: '/',
    filename: 'build/build.js'
  },

  resolve: {
    modules: [Dir.node_modules],
    extensions: ['.js', '.vue'],
    alias: {
      'client': Path.join(Dir.view),
      'components': Path.join(Dir.view, 'components'),
      'vue$': 'vue/dist/vue.common.js',
    }
  },

  module: {

    rules: [

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.html$/,
        loader: 'html-loader'
      },

      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          },
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'assets/',
            }
          },
        ]
      },

    ]
  },




  plugins: [

    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new VueLoaderPlugin(),

    new Webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: Path.resolve(Dir.public, 'index.html'),
      template: Path.resolve(Dir.view, 'index.html'),
      inject: true,
    }),

    new ExtractTextPlugin('build/style.css')

  ],

  devtool: 'source-map',

  performance: {
    hints: false
  },

}
