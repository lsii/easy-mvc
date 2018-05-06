
exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema.createTable('users', (t) => {
      t.increments('id').primary()
      t.string('name')
      t.dateTime('created_at').notNull().defaultTo(knex.raw('now()'))
      t.dateTime('updated_at').nullable()
      t.dateTime('deleted_at').nullable()
    }),

    knex('users').insert([
      {
        name: 'test'
      }
    ])

  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
}
