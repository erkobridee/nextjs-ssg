import { readFileSync } from 'fs';

//----------------------------------------------------------------------------//

const packageJSON = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }));

const { name } = packageJSON;

//----------------------------------------------------------------------------//

export const isProduction = 'production' === `${process.env.NODE_ENV}`;

export const basePath = isProduction ? `/${name}` : '';

export const distDir = isProduction ? `out/${name}` : '.next';
