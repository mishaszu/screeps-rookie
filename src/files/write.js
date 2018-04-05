const fs = require('fs');

module.exports = {
  writeFileSync: function(file, content) {
    try {
      fs.writeFileSync(file, content, 'utf8');
    } catch(e) {
      this.log.error(e);
    }
  },
};
