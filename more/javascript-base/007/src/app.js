console.log('app.js')

var $ = require('jquery');
console.log($);

var $root = $('#root')
$root.html('<h1>jQuery插入的文字</h1>')

var aUtil = require('./a_util.js')
aUtil.print()