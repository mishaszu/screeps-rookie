const fs = require('fs');

module.exports = {
  branchChoose: function(obj) {
    obj.modules = this._parseModules(obj.path);
    return obj;
  },
  _parseModules: function(dir) {
    const modules = {};
    fs.readdirSync(dir).forEach(file => {
      const name = file.split('.');
      if (name[0] !== '') {
        modules[name[0]] = this.readFileSync([dir, file].join('/'));
      }
    });
    return modules;
  },
};
