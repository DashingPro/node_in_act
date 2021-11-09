const glob = require('glob')

var eventLoop = {
  count: 0,
  loop() {
    console.log(this);
    if (++this.count > 10) {
      return
    }
    setTimeout(this.loop.bind(this), 50);
  }
}

eventLoop.loop()
var loop = eventLoop.loop;
loop.apply(eventLoop)