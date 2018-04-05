const fs = require('fs');

module.exports = {
  choose: function(obj) {
    obj.modules = this._parseModules(obj.path);
    return obj;
  },
  _parseModules: function(dir) {
    const modules = {};
    fs.readdirSync(dir).forEach(file => {
      const name = file.split('.');
      modules[name[0]] = this.fileSync([dir, file].join('/'));
    });
    return modules;
  },
};
