const assetsPrefix = `${process.env.ASSETS_PREFIX}`;

export const updateUrlPath = (path) =>
  assetsPrefix ? `${assetsPrefix}/${path}` : path;

export default updateUrlPath;
