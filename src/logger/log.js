const L = require('l-print');

module.exports = {
  log: {
    success: L().pipe('green', 'date', 'log'),
    info: L().pipe('blue', 'date', 'log'),
    error: L().pipe('red', 'date', 'log'),
  },
};
