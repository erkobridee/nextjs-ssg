const exec = require('./libs/execute-sync-command');

function getCommitHash() {
  // Get only the first 8 digits of the latest commit
  return exec('git rev-parse HEAD | cut -c 1-8');
}

module.exports = getCommitHash();
