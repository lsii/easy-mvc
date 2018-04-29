const { Controller, Service } = require('../container');
const Joi = require('joi');


let apiRoutes = [

  {
    method: 'GET',
    path: '/api/hello',
    handler: Controller.Hello.greet,
  },

];


const apiConfig = {
  state: {
    parse: true,
    failAction: 'ignore',
  },
  tags: ['api']
};


apiRoutes = Service.RouteUtil.setConfigToAllRoutes(apiRoutes, apiConfig);
module.exports = apiRoutes;
