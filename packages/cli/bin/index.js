#!/usr/bin/env node

const program = require('commander')

program
  .version(`authingmove-cli ${require('../package.json').version}`)
  .usage('<command> [options]')

program.command('create <project-name>')
  .description('create a new project powered by authingmove-cli')
  .action(() => require('../lib/create')())

program.parse(process.argv)
