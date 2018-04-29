const Dir = require('../dir');
const { Service } = require('../container');
const Path = require('path');

let staticRoutes = [

  {
    method: 'GET',
    path: '/assets/{filepath*}',
    handler: {
      directory: {
        path: Path.join(Dir.public, 'assets/'),
        listing: false,
        index: false
      }
    }
  },

  {
    method: 'GET',
    path: '/build/{filepath*}',
    handler: {
      directory: {
        path: Path.join(Dir.public, 'build/'),
        listing: false,
        index: false
      }
    }
  },

  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.file(Path.join(Dir.public, 'index.html'));
    },
  },

];

const staticConfig = {
  auth: false,
  cache: {
    expiresIn: 24 * 60 * 60 * 1000,
    privacy: 'public'
  },
  state: {
    parse: true,
    failAction: 'ignore',
  }
};


staticRoutes = Service.RouteUtil.setConfigToAllRoutes(staticRoutes, staticConfig);
module.exports = staticRoutes;
