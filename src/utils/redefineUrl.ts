import { basePath as baseUrl } from './settings';

//----------------------------------------------------------------------------//

export const redefineUrl = (url: string) => {
  let newUrl = baseUrl;

  const hrefStartWithSlash = url.startsWith('/');

  if (baseUrl === '/') {
    newUrl = hrefStartWithSlash ? url : `/${url}`;
  } else {
    const baseUrlEndWithSlash = baseUrl.endsWith('/');

    newUrl = `${baseUrl}${!baseUrlEndWithSlash && !hrefStartWithSlash ? `/` : ''}${url}`;
  }

  return newUrl;
};

export default redefineUrl;
