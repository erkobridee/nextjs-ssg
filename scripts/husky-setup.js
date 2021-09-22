const path = require('path');
const { pathExistsSync } = require('./libs/fs-toolkit');
const exec = require('./libs/execute-sync-command');

const filePath = path.join(__dirname, '..', '.husky', 'pre-commit');
const flag = pathExistsSync(filePath);

if (!flag) {
  exec(`npx run-s husky:install husky:config:pre-commit`, {
    stdio: [0, 1, 2],
  });
  console.log('');
}
