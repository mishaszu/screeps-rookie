const {branches} = require('../branches')
const fs = require('fs')

const Read = require('./read')

function Branch() {
  function choose(name) {
    const dir = `${__dirname}/../branches/${name}`
    parseModules(dir)
    return {
      name: name,
      modules: parseModules(dir)
    }
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
