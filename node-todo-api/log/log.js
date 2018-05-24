const chalk = require('chalk')


var logGreen = function(label, value) {
  newLabel = `[${label}]`
  console.log(`${chalk.green(newLabel)}`, value)
}
var logYellow = function(label, value) {
  newLabel = `[${label}]`
  console.log(`${chalk.yellow(newLabel)}`, value)
}
var logRed = function(label, value) {
  newLabel = `[${label}]`
  console.log(`${chalk.red(newLabel)}`, value)
}

module.exports = { logGreen, logYellow, logRed }
