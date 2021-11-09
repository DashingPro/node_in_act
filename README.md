# node_in_act

## 模块：CommonJS规范
之前加载js 浏览器 使用 `<script />`，如果带有 `src` 属性，浏览器从远端下载脚本并执行；否则直接执行标签中的代码。
* 脚本变的很多时，需要手动管理加载顺序。先jQuery 后业务脚本，管理成本增加。
* 不同脚本之间的逻辑调用，需要通过全局变量作为桥梁的方式。全局变量爆增，不好管理，被覆盖。
* 没有 `html` 怎么办？

`CommonJS` 本来是个很大的东西，这是现在只有模块规范的东西被node采用了，并得到了推广。
特别精简，后续也影响到了浏览器端的JavaScript。

## 淘宝 npm 镜像
https://npmmirror.com/
cnpm

## EventEmitter
观察者模式
调用 vs 抛事件
  * 关键在于 '不知道被通知者的存在'
  * 以及 '没有人听还能继续下去'

没有私密性 可能无法完成  错误例子：老板通知秘书做事

## 异步：非阻塞 IO
阻塞I/O 与 非阻塞的区别就在于 系统接收输入再到输出期间，能不能再接收输入。
理解要点：
  * 确定一个进行 IO 的系统
  * 思考在 IO 过程中，能不能进行其他 IO。
glob.sync
glob(haha, callback(err, res))

## 异步：回调函数 callback
回调函数格式规范
 * error-first callback
 * Node-style callback
第一个参数是error，后面的参数才是结果

每一个时间循环都是一个全新的调用栈

异步流程控制：
回调地狱
异步并发 async  thunk

## 异步：事件循环

## 异步： Promise
当前时间循环得不到结果，但是未来的时间循环会给到你结果
是一个状态机
 * pending
 * fulfilled/resolved
 * rejected

执行then和catch会返回一个新Promise，该Promise最终状态根据then和catch的回调函数的执行结果决定
* 如果回调函数最终throw，该Promise是 rejected状态
* 如果回调函数最终是return，该Promise是resolved状态
* 但如果回调函数最终return了一个Promise，该Promise会和回调函数return的Promise状态保持一致

## 异步：async await

async function 是 Promise 的语法糖封装
异步编程中级方法，已同步的方式写异步
* await 关键字可以 "暂停" async function 的执行
* await关键字可以已同步的写法获取 Promise的执行结果
* try-catch可以获取 await 所得到的错误
