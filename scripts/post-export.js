/*
  trailingSlash + custom 404 + next export defaults to default 404 page. #16528
  https://github.com/vercel/next.js/issues/16528
*/

const { writeFile, readFile } = require('fs').promises;
const { join } = require('path');

const main = async () => {
  const file = await readFile(join(__dirname, '..', 'out/404/index.html'));

  await writeFile(join(__dirname, '..', 'out/404.html'), file);
};

main();
