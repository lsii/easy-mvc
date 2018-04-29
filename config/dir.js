
const REGISTERED_DIRECTORIES = {

  root: '',
  node_modules: "node_modules",
  app: "app",
  controller: "app/Controller",
  model: "app/Model",
  service: "app/Service",
  view: "app/View",
  config: "config",
  plugins: "config/plugins",
  public: "public",
  dev: "config/dev",

};

const Path = require('path');
const PROJECT_ROOT = Path.resolve(__dirname, '../');
const ABSOLUTE_PATH_MAP = Object.entries(REGISTERED_DIRECTORIES)
                            .reduce((p, c) => {
                              p[c[0]] = Path.resolve(PROJECT_ROOT, c[1])
                              return p;
                            }, {});

module.exports = ABSOLUTE_PATH_MAP;
