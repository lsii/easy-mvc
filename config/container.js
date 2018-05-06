
const Path = require('path')
const PROJECT_ROOT = Path.resolve(__dirname, '../')

class Container {
  constructor () {
    this.instances = {}
  }

  use (key) {
    if (!this.instances[key]) {
      this.instances[key] = this._require(key)
    }
    return this.instances[key]
  }

  _require (key) {
    return require(this.getPath(key))
  }

  getPath (key) {
    return Path.resolve(PROJECT_ROOT, key)
  }

  register (key, instance) {
    this.instances[key] = instance
  }
}

module.exports = new Container()
