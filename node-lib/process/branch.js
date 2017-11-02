const fs = require('fs')

const Read = require('./read')

function Branch() {
  function choose(obj) {
    obj.modules = parseModules(obj.path)
    return obj
  }

  function parseModules(dir) {
    const modules = {}
    fs.readdirSync(dir).forEach(file => {
      const name = file.split('.')
      modules[name[0]] = Read.file([dir, file].join('/'))
    })
    return modules
  }

  return {
    choose: choose
  }
}

module.exports = Branch()
