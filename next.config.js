const wp = require('webpack');

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
  future: {
    webpack5: true,
  },
};
