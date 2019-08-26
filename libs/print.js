const { yellow } = require('kleur');

const pkg = require('../package.json');

exports.printHelp = function() {
  console.log('Show $PATH environment variable in a human-readable way\n');

  console.log('Options:');
  console.log('  -v, --version \t output the version number');
  console.log('  -h, --help \t\t output usage information \n');

  console.log('Commands:');
  console.log('  i, interactive \t run the command in interactive mode');
};

exports.printPkgVersion = function() {
  console.log(yellow(`v${pkg.version}`));
};
