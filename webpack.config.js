const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {
  resolve,
  join,
  basename
} = require('path');
const _mode = argv.mode || 'development'; // development or production
const _modeflag = (_mode === 'production');
let _mergeConfig = '';
if(argv.env === 'server'){
   _mergeConfig = require(`./config/webpack.server.js`);
}else{
   _mergeConfig = require(`./config/webpack.${_mode}.js`);
}

// let _entry = {}; // 入口文件
let _plugins = []; // 插件
// 生成环境和开发环境公共配置
let webpackConfig = {
  module: {
    rules: [{
      test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|otf)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: _modeflag ? 'images/[name].[hash:5].[ext]' : 'images/[name].[ext]'
        }
      }]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test:/\.vue$/,
      loader:'vue-loader',
      options:{
        extractCSS:true
      }
    }]
  },
  watch: !_modeflag,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1
  },
  optimization: {

  },
  output: {
    path: join(__dirname, './dist/assets'),
    publicPath: '/',
    filename: 'scripts/[name].bundle.js'
  },
  plugins: [
    ..._plugins,
    new VueLoaderPlugin()
  ],
  resolve: {
    modules: [resolve(__dirname, 'node_modules')],
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue']
  }
};
module.exports = merge(webpackConfig, _mergeConfig);