#!/usr/bin/env node
require('./config/boot')
var program = require('commander')
var commands = $container.use('app/commands')

for (let cmd of Object.values(commands)) {
  var p = program.command(cmd.command)

  for (let option of cmd.options) {
    program.option.call(p, ...option)
  }

  program.action.call(p, cmd.action)
}

program.parse(process.argv)
