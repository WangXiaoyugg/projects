var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:{
		app:path.resolve(__dirname,'app/index.jsx'),
		vendor: Object.keys(pkg.dependencies) //将第三方依赖你单独打包
	}
	output:{
		path:__dirname+'/build',
		filename:'/js/[name].[chunkhash:8].js'
	},
	resolve:{
		extensions:['','.js','.jsx']
	},
	module:{
		loaders:[
			{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:'babel'},
			{test:/\.less$/,exclude:/node_modules/,loader:ExtractTextPlugin.extract('style','css!postcss!less')},
			{test:/\.css$/,exclude:/node_modules/,loader:ExtractTextPlugin.extract('style','css!postcss')},
			{test:/\.(png|gif|jpg|jpeg|bmp)$/i,loader:'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]'},
			{test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,,loader:'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'}
		],
		postcss:[
			require('autoprefixer') //加浏览器前缀
		]
	}
	plugins:[
		//webpack 内置的banner-plugin
		new webpack.BannerPlugin('Copyright by 2270099149@qq.com.')

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

		//定义为生产环境，编译react时压缩最小
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV':JSON.stringify(process.env.NODE_ENV)
			}
		})

		//分配组件id
		new webpack.optimize.OccurenceOrderPlugin(),

		//压缩空白字符
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			}
		}),

		//分离css和js文件
		new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),

		//提供公共代码
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			filename:'/js/[name].[chunkhash:8].js'
		}),


		//业务中判断是开发环境还是线上环境,提示错误
		new webpack.DefinePlugin({
			__DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev')|| 'false'))
		})
	]
}