const {Branch} = require('./src/branch');
const {Read, Dir, Write} = require('./src/files');
const {Log} = require('./src/logger');
const {Request, Send} = require('./src/network');

module.exports = Object.assign(
  {},
  Branch,
  Read, Dir, Write,
  Log,
  Request, Send
);
