let a = require("./moduleA");
// console.log(a);
// console.log(a.xxx);
// 本质上一个文件就是一个module，//TODO 重点
// 当我们require一个文件的时候，
// 真正对应去找的是module.export

exports.test = a;

console.log(module);

// 核心:
// 1.exports 是指向的 module.exports 的引用
// 2.module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
// 3.require() 返回的是 module.exports 而不是 exports
