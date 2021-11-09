
const game = require('./lib')
const os = require("os")

console.log(os.freemem() / 1024 / 1024)
console.log(os.cpus())

let count = 0
process.stdin.on('data', e => {
  const playerAction = e.toString().trim()
  const result = game(playerAction)

  if (result == -1) {
    count++
  }

  if (count == 3) {
    console.log('你太厉害了，我不玩了')
    process.exit()
  }
})