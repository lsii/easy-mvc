
module.exports = {

  command: 'sample <arg1> <arg2>',

  description: '',

  options: [
    ['-f, --firstOption', 'First Option'],
    ['-s, --secondOption', 'Second Option']
  ],

  action: (arg1, arg2, options) => {
    console.log( arg1, arg2, options.firstOption, options.secondOption);
  }

}