const fs = require('fs');

module.exports = {
  readFileSync: function(path) {
    const file = fs.readFileSync(path, 'utf8');
    if (!file) {
      this.log.error('Can not read file.');
      return false;
    }
    return file;
  },
};
