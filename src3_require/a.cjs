
exports.aPrint = function(caller) {
  console.log(`aPrint from ${caller}`);
}
const B = require('./b.cjs');
B.bPrint('a')

exports.aString = 'aString';
