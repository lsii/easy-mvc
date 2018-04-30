const knex = require('knex')(
  require('../../knexfile').development
);

const res = fn => {
  fn()
    .then( res => {
      console.log(res);
      process.exit(0);
    })
    .catch( err => {
      console.log(err);
      process.exit(1);
    });
};


module.exports = {

  command: 'db <command> <table>',

  description: '',

  options: [
    ['-f, --force', 'Force execute']
  ],


  action: (command, table, options) => {

    res(async () => {

      if (command === 'rm' && options.force) {
        await knex.schema.hasTable(table);
        await knex.schema.dropTable(table);
      }

    });

  }

}