
const A = require('./a.cjs')

A.aPrint('b')

exports.bPrint = function(caller) {
  console.log(`bPrint from ${caller}`);
}

setTimeout(() => {
  console.log(A.aString)
})
