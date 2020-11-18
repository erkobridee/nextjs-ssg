const isProduction = 'production' === process.env.NODE_ENV;

module.exports = {
  basePath: isProduction ? '/nextjs-ssg-hello' : '',
  reactStrictMode: true,
};
