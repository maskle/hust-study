var counter = 3;
function incCounter() {
  counter++;
  console.log(counter, "in");
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
