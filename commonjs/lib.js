// exports 跟外面的是同一个引用

exports.hello = 'world'

exports.add = function (a, b) {
  return a + b
}

// module.exports 会覆盖整个 exports
// module.exports = function (a, b) {
//   return a - b
// }

setTimeout(() => {
  console.log(exports);
  console.log(module.exports)
}, 200);