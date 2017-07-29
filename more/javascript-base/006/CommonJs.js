//构建工具高度自动化
//使用npm成本非常低
//前端的插件和库都可以从npm获取
//CommonJs不会异步加载JS,而是一次性加载出来

module.exports = {
	hello(){
		console.log('hello')
	}
}

//构建工具的支持
//一般和npm一起使用

//AMD 和 CommonJS的使用场景
//异步加载JS AMD
//不要异步加载 使用npm之后 CommONJS
