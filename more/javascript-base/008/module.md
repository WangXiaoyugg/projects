//不使用模块化
//开发util.js基础函数库
//业务层一直引用基础库上开发
//一般是强依赖的关系
//代码的函数必须是全局变量，全局变量污染

//所以使用模块化
//AMD
//CommonJS

//上线和回滚
//基本流程
//1. 将测试完成代码提交到git版本库master分支
//2. 将服务器代码全部打包并记录版本号，备份
//3. 将master分支的代码带包覆盖服务器的代码，
//4. 将当前服务器代码打包并记录版本号，备份
//5. 将备份的上一个版本号解压，覆盖线上服务器，生成新的版本号
//
//
//
//
//
//linux基本命令
//1. 服务器linux居多，server版，只有命令行
//2. 测试环境要匹配线上环境，因此也是linux
//3. 测试机来自己配置，获取数据


//登陆 ssh name@server
//输入密码

//mkdir a 
//ls  //a
//ll
//cd a
//pwd
//cd ..
//pwd
//rm -rf a
//ll
//vi a.js
//ll
//cp a.js a1.js
//ls //a.js a1.js
//mkdir src
//mv a1.js src/a1.js
//ls
//cd src
//ll
//cd ..
//rm a.js
//ll
//
//vi a.js
//i => insert
//esc => 命令模式
//esc => :wq :q :w
//cat a.js
//head a.js //头部信息
//tail a.js //尾部信息
//head -n 2 a.js //显示头部前两行
//tail -n 2 a.js //显示头部后两行
//grep '2' a.js  //搜索2 在 a.js
 