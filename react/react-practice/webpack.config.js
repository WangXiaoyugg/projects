var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'app/index.jsx'),
	output:{
		filename:'bundle.js'
	},
	resolve:{
		extensions:['','.js','.jsx']
	},
	module:{
		loaders:[
			{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:'babel'},
			{test:/\.less$/,exclude:/node_modules/,loader:'style!css!postcss!less'},
			{test:/\.css$/,exclude:/node_modules/,loader:'style!css!postcss'},
			{test:/\.(png|gif|jpg|jpeg|bmp)$/i,loader:'url-loader?limit=5000'},
			{test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,,loader:'url-loader?limit=5000'}
		],
		postcss:[
			require('autoprefixer') //加浏览器前缀
		]
	}
	plugins:[
		//html模板插件
		new HtmlWebpackPlugin({
			template:__dirname +'/app/index.tmpl.html'
		}),

		//热加载
		new webpack.HotModuleReplacementPlugin(),

		//打开浏览器
		new OpenBrowserPlugin({
			url:'http://localhost:8888'
		}),

		//业务中判断是开发环境还是线上环境
		new webpack.DefinePlugin({
			__DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev')|| 'false'))
		})

	],
	devServer:{
		color:true,
		historyApiFallback:true, //不跳转页面
		inline:true, //实时刷新
		hot:true, //使用热加载
	}
}