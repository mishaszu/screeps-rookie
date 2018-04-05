const https = require('https');
const pipe = require('b-pipe');
const path = require('path');

module.exports = {
  networkSend: function(path, config) {
    const send_pipe = pipe(this.branchChoose.bind(this), this.requestPost);
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
  networkLunch: function(sourceFolder, buildFolder, branch, config) {
    const allFiles = this.dirRead(path.join(sourceFolder,branch));
    this.dirBuild(allFiles, path.join(buildFolder, branch));
    this.networkSend(path.join(buildFolder, branch), config);
  }
};
