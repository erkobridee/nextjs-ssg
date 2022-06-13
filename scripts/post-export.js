/*
  trailingSlash + custom 404 + next export defaults to default 404 page. #16528
  https://github.com/vercel/next.js/issues/16528
*/

const { copyFile } = require('fs/promises');

const main = async () => {
  await copyFile('out/404/index.html', 'out/404.html');
};

main();
