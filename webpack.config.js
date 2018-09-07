const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
	hot: true,
	open: true,
	inline: true	
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
	  {
        test: /\.scss$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: ['css-loader','sass-loader']
		})
      },
	  {
        test: /\.sass$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: ['css-loader','sass-loader']
		})
      },
	  {
		test: /\.(jpg|png|gif|svg)$/, 
		loader: 'file-loader',
		options: {
			name: 'images/[name].[ext]'
		},
	  }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
	new ExtractTextPlugin('style.css'),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
