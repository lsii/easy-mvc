
let staticRoutes = [

  {
    method: 'GET',
    path: '/assets/{filepath*}',
    handler: {
      directory: {
        path: $container.getPath('public/assets'),
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
        path: $container.getPath('public/build'),
        listing: false,
        index: false
      }
    }
  },

  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.file($container.getPath('public/index.html'))
    }
  }

]

const staticConfig = {
  auth: false,
  cache: {
    expiresIn: 24 * 60 * 60 * 1000,
    privacy: 'public'
  },
  state: {
    parse: true,
    failAction: 'ignore'
  }
}

staticRoutes = staticRoutes.map(route => {
  route.config = Object.assign(route.config || {}, staticConfig)
  return route
})

module.exports = staticRoutes
