let message = require('./main.cjs').message

exports.count = 5

setTimeout(() => {
  console.log(message)
});