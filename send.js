const https = require('https')
const pipe = require('b-pipe')
const {Branch, Request} = require('./node-lib/process')

const credi = require('./credi.js')

const send_pipe = pipe(checkArgs, Branch.choose, Request.post)

const result = send_pipe(process.argv)

result.then((res) => {
  console.log('\x1b[32m', 'successfully send to your screeps account', '\x1b[0m')
}).catch((err) => {
  console.log('\x1b[31m', `Faced error: ${err}`, '\x1b[0m')
})

function checkArgs(args) {
  if (args.length !== 3) {
    throw 'Wrong arguments number'
  }
  return args[2]
}
