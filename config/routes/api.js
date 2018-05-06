
const controllers = $container.use('app/controllers')

let apiRoutes = [

  {
    method: 'GET',
    path: '/api/hello',
    handler: controllers.HelloController.greet,
    config: {
      state: {parse: false}
    }
  }

]

const apiConfig = {
  state: {
    parse: true,
    failAction: 'ignore'
  },
  tags: ['api']
}

apiRoutes = apiRoutes.map(route => {
  route.config = Object.assign(route.config || {}, apiConfig)
  return route
})

module.exports = apiRoutes
