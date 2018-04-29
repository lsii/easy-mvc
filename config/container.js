var requireDirectory = require('require-directory');
const Dir = require('./dir');

module.exports = {
  Controller: requireDirectory(module, Dir.controller),
  Model: requireDirectory(module, Dir.model),
  Service: requireDirectory(module, Dir.service),
}
