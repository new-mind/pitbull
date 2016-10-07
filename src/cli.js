import yargs from 'yargs'

import runCmd from './cmds/run'

let argv = yargs
  .help('h')
  .alias('h', 'help')
  .command('run', 'Run pitbull', runCmd)
  .usage('Usage: $0 run')
  .epilog('2016')
  .argv;

