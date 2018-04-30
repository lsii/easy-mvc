

module.exports = {

  setConfigToAllRoutes: (routes, commonConfig) => {
    return routes.map( route => {
      let config = route.config || {};
      route.config = Object.assign(config, commonConfig);
      return route;
    });
  }

}

