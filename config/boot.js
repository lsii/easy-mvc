
global.$container = require('./container')

const Knex = require('knex')
const knexConfig = $container.use('knexfile')
const knex = Knex(knexConfig.development)
$container.register('knex', knex)
