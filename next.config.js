const wp = require('webpack');

const isProduction = 'production' === process.env.NODE_ENV;

const basePath = isProduction ? '/nextjs-ssg-hello' : '';

const webpack = (config) => {
  config.plugins.push(
    new wp.DefinePlugin({
      'process.env.ASSETS_PREFIX': JSON.stringify(basePath),
    })
  );

  return config;
};

module.exports = {
  reactStrictMode: true,
  basePath,
  webpack,
};
