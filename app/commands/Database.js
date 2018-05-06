
const knex = $container.use('knex')
const Example = $container.use('app/models/Example')

module.exports = {

  command: 'db <command>',

  description: '',

  options: [
    ['-f, --force', 'Force execute']
  ],

  action: (command, options) => {
    const start = async () => {
      if (command === 'refresh') {
        await refresh(options)
      } else if (command === 'test') {
        await test()
      }
    }

    start()
      .then(res => {
        process.exit(0)
      })
      .catch(err => {
        console.log(err)
        process.exit(1)
      })
  }

}

async function refresh (options) {
  const SHOW_TALBES_QUERY = 'show tables'

  if (options.force) {
    let res = await knex.raw(SHOW_TALBES_QUERY)
    let dropTablePromises = res[0]
      .map(tableObj => Object.values(tableObj)[0])
      .map(tableName => {
        return knex.schema.dropTable(tableName)
      })

    for (let dropTablePromise of dropTablePromises) {
      await dropTablePromise
        .then(res => {
          // console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      // console.log( 'here', Object.keys(dropTablePromise))
    }
  } else {
    let flag = true
    while (flag) {
      let res = await knex.migrate.rollback()
      flag = res[0] !== 0
    }
  }
  await knex.migrate.latest()
}

async function test () {
  let res = await Example.query()

  console.log(res)
}
