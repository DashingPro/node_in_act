// exports 跟外面的是同一个引用

module.exports = function (playerAction) {
  const rock = 'rock'
  const scissor = 'scissor'
  const paper = 'paper'
  
  const all = [rock, scissor, paper]

  if (!all.includes(playerAction)) {
    console.log(`请输入正确的行为，行为必须是 ${playerAction} 中的一种`);
    return
  }
  console.log(playerAction);
  
  const random = Math.floor(Math.random() * 3);
  console.log(`random = ${random}`);
  const computerAction = all[random];
  
  if (computerAction == playerAction) {
    console.log('平局');
    return 0
  } else if (
    (computerAction == rock && playerAction == scissor) ||
    (computerAction == scissor && playerAction == paper) ||
    (computerAction == paper && playerAction == rock)
  ) {
    console.log('您输了');
    return -1
  } else {
    console.log('您赢了');
    return 1
  }
}

// exports.hello = 'world'

// exports.add = function (a, b) {
//   return a + b
// }

// // module.exports 会覆盖整个 exports
// // module.exports = function (a, b) {
// //   return a - b
// // }

// setTimeout(() => {
//   console.log(exports);
//   console.log(module.exports)
// }, 200);