var https = require('https');

function Request() {

  function post(obj) {
    let status = ''
    const data = {
      branch: obj.branch,         
      modules: obj.modules
    }
    const send = new Promise((resolve, reject) => {
      const req = https.request({
        hostname: 'screeps.com',
        port: 443,
        path: '/api/user/code',
        method: 'POST',
        auth: obj.email + ':' + obj.pass,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }, (res) => {
        let value = res.connection._httpMessage.res.statusMessage;
        if (value === "OK") {
          resolve(true)
        } else {
          reject(value)
        }
      })
      req.write(JSON.stringify(data));
      req.end();
    })
    return send
  }
  
  function mock(obj) {
    console.log(obj)
  }

  return {
    post: post,
    mock: mock
  }
}

module.exports = Request()
