
require('./boot')
const Hapi = require('hapi')
const Inert = require('inert')
const staticRoutes = require('./routes/static')
const apiRoutes = require('./routes/api')

const start = async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port: 3000
  })

  await server.register([
    Inert
  ])

  server.route(staticRoutes)
  server.route(apiRoutes)

  try {
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (err) {
    console.log(err)
  }

  module.exports = server
}
start()
