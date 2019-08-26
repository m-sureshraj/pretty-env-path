#! /usr/bin/env node
const { yellow } = require('kleur');

const { printHelp, printPkgVersion } = require('../libs/print');
const { getEnvPath } = require('../libs/util');
const initInteractiveMode = require('../libs/interactive.js');

const args = process.argv.slice(2); // ignore the 1st two arguments
const PATHS = getEnvPath();

// No arguments, Just print the path & exit
if (args.length === 0) {
  console.log(PATHS.join('\n'));
  process.exit();
}

switch (args[0]) {
  // command
  case 'i':
  case 'interactive':
    initInteractiveMode();
    break;

  // options
  case '-v':
  case '--version':
    printPkgVersion();
    break;

  case '-h':
  case '--help':
    printHelp();
    break;

  default:
    console.log(yellow('^^ Sorry, that is not something I know how to do. ^^\n'));
    printHelp();
}
