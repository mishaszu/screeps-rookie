const https = require('https');
const pipe = require('b-pipe');

const {Branch} = require('./src/branch');
const {Request} = require('./src/network');

function SRookie() {
  
  function send(path, config) {
    const send_pipe = pipe(Branch.choose, Request.post)
    const rookieObj = {
      email: config.email,
      pass: config.password,
      branch: path.split('/').pop(),
      path: path
    }
    
    const result = send_pipe(rookieObj)
    
    result.then((res) => {
      console.log('\x1b[32m', 'successfully send to your screeps account', '\x1b[0m')
    }).catch((err) => {
      console.log('\x1b[31m', `Faced error: ${err}`, '\x1b[0m')
    })
  }  

  return {
    send: send
  }
}

module.exports = SRookie();
