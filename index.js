const {Branch} = require('./src/branch');
const {Read} = require('./src/files');
const {Log} = require('./src/logger');
const {Request, Send} = require('./src/network');

module.exports = Object.assign(
  {},
  Branch,
  Read,
  Log,
  Request, Send
);
