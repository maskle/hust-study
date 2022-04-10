var counter = require("./lib").counter;
var incCounter = require("./lib").incCounter;

console.log(counter); // 3
Object.keys(require.cache).forEach(function (key) {
  delete require.cache[key];
});
incCounter();
var counter1 = require("./lib").counter;
console.log(counter1); // 3
