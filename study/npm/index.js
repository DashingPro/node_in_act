// const glob = require('glob')

// var eventLoop = {
//   count: 0,
//   loop() {
//     console.log(this);
//     if (++this.count > 10) {
//       return
//     }
//     setTimeout(this.loop.bind(this), 50);
//   }
// }

// eventLoop.loop()
// var loop = eventLoop.loop;
// loop.apply(eventLoop)

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let err = new Error('haha')
//     reject(err)
//   }, 500)
// }).then(function () {

// }).catch(function (e) {
//   console.log(e);
// })

// console.log(promise)
// setTimeout(() => {
//   console.log(promise);
// }, 800);

async function interview(round) {
  let res = await new Promise(function (resolve) {
    setTimeout(() => {
      resolve(Math.random() > 0.2)
    }, 500);
  })
  console.log(res);
  if (!res) {
    let error = new Error()
    error.round = round
    throw error
  }
  return res
}

(async function () {
  try {
    await interview(1)
    await interview(2)
    await interview(3)
    console.log('smile');
  } catch (error) {
    console.log('cry at ' + error.round + ' round');
  }
})()