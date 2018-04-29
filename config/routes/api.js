const Joi = require('joi');
const { Controller } = require('../container');

let apiRoutes = [

  {
    method: 'GET',
    path: '/api/hello',
    handler: Controller.Hello.greet,
  },

];


let apiConfig = {
  state: {
    parse: true,
    failAction: 'ignore',
  },
  tags: ['api']
};

const setConfigToAllRoutes = (routes, commonConfig) => {
  return routes.map( r => {
    let config = r.config || {};
    r.config = Object.assign(config, commonConfig);
    return r;
  });
};

apiRoutes = setConfigToAllRoutes(apiRoutes, apiConfig);

module.exports = apiRoutes;

