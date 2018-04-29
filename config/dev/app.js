const Dir = require('../dir');
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package');
const Path = require('path');
const staticRoutes = require('../routes/static');
const apiRoutes = require('../routes/api');
const { Service } = require('../container');


(async () => {

  const server = await new Hapi.Server({
      host: 'localhost',
      port: 3000,
  });

  async function initWebpackTools (middleware, config) {
    await server.register({
      plugin: middleware,
      options: {
        config: config,
        devOptions: {
          logLevel: 'warn',
          publicPath: config.output.publicPath,
          stats: {
            colors: true
          }
        }
      }
    });
  }

  // Register webpack HMR, fallback to development environment
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    const WebpackConfig = require(Path.resolve(Dir.dev, 'webpack.config.js')); // Webpack config
    const HapiWebpackMiddleware = require(Path.resolve(Dir.plugins, 'HapiWebpackMiddleware'));
    initWebpackTools(HapiWebpackMiddleware, WebpackConfig);
  }

  const swaggerOptions = {
    info: {
      title: 'Test API Documentation',
      version: Pack.version,
    }
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  server.route(staticRoutes);
  server.route(apiRoutes);

  try {
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch(err) {
    console.log(err);
  }

  module.exports = server;

})();
