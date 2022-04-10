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

// 引用包查找过程
// 从 Y 路径运行 require(X)

// 1. 如果 X 是内置模块（比如 require('http'）)
// 　　a. 返回该模块。
// 　　b. 不再继续执行。

// 2. 如果 X 是以 '/' 开头、
//    a. 设置 Y 为 '/'

// 3. 如果 X 是以 './' 或 '/' 或 '../' 开头
//    a. 依次尝试加载文件，如果找到则不再执行
//       - (Y + X)
//       - (Y + X).js
//       - (Y + X).json
//       - (Y + X).node
//    b. 依次尝试加载目录，如果找到则不再执行
//       - (Y + X + package.json 中的 main 字段).js
//       - (Y + X + package.json 中的 main 字段).json
//       - (Y + X + package.json 中的 main 字段).node
// 　　c. 抛出 "not found"
// 4. 遍历 module paths 查找，如果找到则不再执行
// 5. 抛出 "not found"

