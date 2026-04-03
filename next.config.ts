import type { NextConfig } from 'next';

import { basePath, distDir } from './src/utils/settings';

//----------------------------------------------------------------------------//

const nextConfig: NextConfig = {
  // https://nextjs.org/docs/app/getting-started/caching
  cacheComponents: true,

  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',

  /**
   * Redefines the output folder
   *
   * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/distDir
   */
  distDir,

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath,

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true
  }
};

export default nextConfig;
