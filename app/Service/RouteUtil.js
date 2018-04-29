

module.exports = {

  setConfigToAllRoutes: (routes, commonConfig) => {
    return routes.map( r => {
      let config = r.config || {};
      r.config = Object.assign(config, commonConfig);
      return r;
    });
  }

}

