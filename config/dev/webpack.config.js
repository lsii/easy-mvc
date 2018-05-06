require('../boot')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {

  mode: 'development',

  entry: ['webpack-hot-middleware/client', $container.getPath('app/views/main.js')],

  output: {
    path: $container.getPath('public'),
    publicPath: '/',
    filename: 'build/build.js'
  },

  resolve: {
    modules: [$container.getPath('node_modules')],
    extensions: ['.js', '.vue'],
    alias: {
      'client': $container.getPath('app/views'),
      'components': $container.getPath('app/views/components'),
      'vue$': 'vue/dist/vue.common.js'
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
        loader: 'url-loader'
      }

    ]
  },

  plugins: [

    new VueLoaderPlugin(),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new Webpack.HotModuleReplacementPlugin(),

    new Webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: $container.getPath('public/index.html'),
      template: $container.getPath('app/views/index.html'),
      inject: true
    })

  ],

  devtool: 'eval',

  performance: {
    hints: false
  }

}
