const assetsPrefix = `${process.env.ASSETS_PREFIX}`;

export const updateAssetsPrefix = (path: string) =>
  assetsPrefix ? `${assetsPrefix}/${path}` : `/${path}`;

export default updateAssetsPrefix;
