exports.xxx = {
  name: "moduleA",
};
//此文件导出为一个对象obj,obj.xxx={ name: "moduleA"}
//此处的exports实际上是一个指针，指向module.exports,但是并不是module.exports,因此如果直接给他赋值会将他覆盖掉
//此处代表实际上等同于

// module.exports = {};
// exports = module.exports;
// exports.xxx = {
//   name: "moduleA",
// };

// 因此如果直接:
// exports = {
//   name: "moduleA",
// };
// 引入的文件将得到moduleA为{};//未被赋值 moduleA.xxx=undefined

// 但是直接:
// module.exports = { name: "moduleA" };是可行的，因为此处直接赋值了它本身而非它的指针exports

// 如果一个模块的对外接口，就是一个单一的值，不能使用exports输出，只能使用module.exports输出。
// 因此，可以放弃使用exports，只使用module.exports。
// require命令用于加载文件，后缀名默认为.js
console.log(module);

// 入口文件
// 通常，我们会把相关的文件会放在一个目录里面，便于组织。
// 这时，最好为该目录设置一个入口文件，让require方法可以通过这个入口文件，加载整个目录。

// 在目录中放置一个package.json文件，并且将入口文件写入main字段。下面是一个例子。

// { "name" : "some-library",
//   "main" : "./lib/some-library.js" }

//require读取入口文件默认规则

// require发现参数字符串指向一个目录以后，会自动查看该目录的package.json文件，
// 然后加载main字段指定的入口文件。如果package.json文件没有main字段，或者根本就没有package.json文件，
// 则会加载该目录下的index.js文件或index.node文件。

// 所有缓存的模块保存在require.cache之中，如果想删除模块的缓存，可以像下面这样写。


// 删除指定模块的缓存
delete require.cache[moduleName];

// 删除所有模块的缓存
Object.keys(require.cache).forEach(function (key) {
  delete require.cache[key];
});
