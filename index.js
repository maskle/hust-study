let a = require("./moduleA");
// console.log(a);
// console.log(a.xxx);
// 本质上一个文件就是一个module，//TODO 重点
// 当我们require一个文件的时候，
// 真正对应去找的是module.export

exports.test = a;

console.log(module);
