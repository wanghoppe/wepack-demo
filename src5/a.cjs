const bPrint = require('./b.cjs').bPrint;

bPrint('a')

exports.aPrint = function(caller) {
  console.log(`aPrint from ${caller}`);
}

exports.aString = 'aString';
