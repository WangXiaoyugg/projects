#cookie 

本来用于客服端和服务器通信
但是有本地存储的功能，于是被借用
document.cookie = 'xxxxxxxxx';
缺点
存储量太小，只有4kb
httpq请求，影响获取资源的效率
Api简单，需要封装才能用

# localstorage和sessionStorage
- html5 专门存储而设计，最大容量5M
- api简单易用
- localStorage.setItem(key,value),localStorage.getItem(key)
- sessionStorage 关闭页面就结束了
缺点
- ios safari隐藏模式
- localStorage.getItem会报错
- 使用try catch捕捉

# 作业

网上查找资料封装cookie和localstorage
