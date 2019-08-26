const prompts = require('prompts');
const { gray, red } = require('kleur');
const { write } = require('clipboardy');

const { getEnvPath } = require('./util');

const PATHS = getEnvPath();
const promptsConfig = {
  type: 'autocomplete',
  name: 'path',
  message: 'Search and Copy',
  choices: PATHS.map(path => ({ title: path })),
  limit: 15,
  fallback: 'No matches found',
  suggest: suggestByTitle,
};

// For better searching - https://github.com/terkelg/prompts/issues/158
function suggestByTitle(input, choices) {
  return Promise.resolve(choices.filter(choice => choice.title.includes(input)));
}

async function searchPaths() {
  const res = await prompts(promptsConfig);

  if (Object.keys(res).length === 0) {
    console.log(red('Aborted!'));
    process.exit();
  }

  if (!res.path) {
    console.log(gray('No matches found!'));
    process.exit();
  }

  try {
    await write(res.path);
    console.log(gray('Selection has been copied to clipboard'));
  } catch (err) {
    console.error(err);
  }
}

module.exports = searchPaths;
