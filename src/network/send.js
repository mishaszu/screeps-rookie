const https = require('https');
const pipe = require('b-pipe');

module.exports = {
  send: function(path, config) {
    const send_pipe = pipe(this.choose.bind(this), this.post);
    const rookieObj = {
      email: config.email,
      pass: config.password,
      branch: path.split('/').pop(),
      path: path,
    };
    
    const result = send_pipe(rookieObj);
    
    result.then((res) => {
      this.log.success('successfully send to your screeps account');
    }).catch((err) => {
      this.log.error(`Faced error: ${err}`);
    });
  },
};
