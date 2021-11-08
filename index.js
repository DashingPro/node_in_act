(function () {
  console.log(process.argv);

  const rock = 'rock'
  const scissor = 'scissor'
  const paper = 'paper'

  const all = [rock, scissor, paper]

  const playerAction = process.argv[process.argv.length - 1]
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
  } else if (
    (computerAction == rock && playerAction == scissor) ||
    (computerAction == scissor && playerAction == paper) ||
    (computerAction == paper && playerAction == rock)
  ) {
    console.log('您输了');
  } else {
    console.log('您赢了');
  }

  // console.log('Hellow world!');

  // console.log(Date);
  // console.log(Math);
  // console.log(setTimeout);

  // console.log(__filename);
  // console.log(__dirname);

  // console.log(process);
})();

function load(module, exports) {
  exports.hello = 'world'
  module.exports = function (a, b) {
    a - b
  }
}

var module = {
  i: '',
  l: false,
  exports: {}
}


load.call(module.exports, module, module.exports, require)