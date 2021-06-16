/*
  https://nextjs.org/docs/api-reference/next.config.js/introduction

  https://nextjs.org/docs/api-reference/next.config.js/environment-variables
*/

const package = require('./package.json');

const isProduction = 'production' === `${process.env.NODE_ENV}`;

const basePath = isProduction ? `/${package.name}` : '';

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  env: {
    ASSETS_PREFIX: basePath,
  },
};
