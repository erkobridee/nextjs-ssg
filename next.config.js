const wp = require('webpack');

const package = require('./package.json');

const isProduction = 'production' === process.env.NODE_ENV;

const basePath = isProduction ? `/${package.name}` : '';

const webpack = (config) => {
  config.plugins.push(
    new wp.DefinePlugin({
      'process.env.ASSETS_PREFIX': JSON.stringify(basePath),
    })
  );

  return config;
};

const i18n = {
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
};

module.exports = {
  reactStrictMode: true,
  basePath,
  webpack,
  i18n,
};
