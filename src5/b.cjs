const aString = require('./a.cjs').aString

setTimeout(() => {
  console.log(aString);
});

exports.bPrint = function(caller) {
  console.log(`bPrint from ${caller}`);
}
