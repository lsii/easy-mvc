const { Model } = require('objection')
Model.knex($container.use('knex'))

class Example extends Model {
  static get tableName () {
    return 'example'
  }
}

module.exports = Example
