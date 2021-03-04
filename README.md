This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

`npx create-next-app nextjs-ssg-hello --use-npm`

## Getting Started

First, run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!--
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
-->

## Useful links

- [Next.js](https://nextjs.org/)

  - [Next.js v10](https://nextjs.org/blog/next-10)

  - [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app)

  - [Markdown/MDX with Next.js](https://nextjs.org/blog/markdown)

  - [Data Fetching | Nextjs Documentation](https://nextjs.org/docs/basic-features/data-fetching)

    - [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) - fetch data at build time

    - [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) - generate static files

  - [[GitHub] next.js/examples/gh-pages/](https://github.com/vercel/next.js/tree/master/examples/gh-pages)

- [[YouTube] Next.js Static Site Generation (SSG)](https://www.youtube.com/watch?v=_W-tcVzu-Ms)

- [[YouTube] Next.js Static Site Generation (SSG) Tutorial](https://www.youtube.com/watch?v=pY0vWYLDDco)

- [[YouTube] Learn Next.js in One Video - Fundamentals of Next.js](https://www.youtube.com/watch?v=tt3PUvhOVzo)

- [[YouTube] Next.js 10's New Image Component](https://www.youtube.com/watch?v=ckH6RHjy-5U)

- [How to Use Github Actions to Deploy a Next.js Website to AWS S3 | freeCodeCamp](https://www.freecodecamp.org/news/how-to-use-github-actions-to-deploy-a-next-js-website-to-aws-s3/)

- [Next.js app on Github Pages | ITNEXT](https://itnext.io/next-js-app-on-github-pages-768020f2b65e)

- [Start a clean Next.js project with TypeScript, ESLint and Prettier from scratch | PAULIN TROGNON](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js)

  - [[GitHub] paulintrognon/next-typescript](https://github.com/paulintrognon/next-typescript)

- [What is Static Site Generation? How Next.js Uses SSG for Dynamic Web Apps | freeCodeCamp](https://www.freecodecamp.org/news/static-site-generation-with-nextjs/)

- [Nested dynamic layouts in Next.js apps | React Tricks](https://reacttricks.com/nested-dynamic-layouts-in-next-apps/) - [youtube](https://www.youtube.com/watch?v=69-mnojSa0M) | [github](https://github.com/kheruc/rt-nested-layouts)

- [Automatic Image Optimization: Next.js 10 New Standards for 2020 | Hackernoon](https://hackernoon.com/automatic-image-optimization-nextjs-10-new-standards-for-2020-dc1h3zlf)

### TypeScript

`npm install --save-dev typescript @types/react @types/node`

- [TypeScript Language](https://www.typescriptlang.org/)

- React with TypeScript

  - [React + TypeScript - Cheatsheets](https://github.com/typescript-cheatsheets/react)

  - [useTypescript — A Complete Guide to React Hooks and TypeScript](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)

- [Next.js TypeScript Types](https://nextjs.org/learn/excel/typescript/nextjs-types)

  - [TypeScript Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

- [How to setup NextJS with TypeScript and ESLint + prettier | De Code Natura](https://decodenatura.com/how-to-set-up-nextjs-typescript-eslint-prettier/) - 2020/05/18

### i18n

> the next.js doesn't support natively i18n on the static site generation on the v10 - [i18n with next export calls getStaticProps for each defined lang, but then errors
> #18318](https://github.com/vercel/next.js/issues/18318#issuecomment-723984723)
>
> said that, we need to use the react side i18n approach

`npm i --save i18next i18next-browser-languagedetector react-i18next`

- [i18next](https://www.i18next.com/)

  - [react-i18next](https://react.i18next.com/)

  - [i18next-browser-languagedetector | npm](https://www.npmjs.com/package/i18next-browser-languagedetector)

#### i18next plugins that doesn't work with next.js

- [i18next-http-backend | npm](https://www.npmjs.com/package/i18next-http-backend) - `Error: ReactDOMServer does not yet support Suspense.`

- [i18next-localstorage-backend | npm](https://www.npmjs.com/package/i18next-localstorage-backend) - `ReferenceError: window is not defined`

  - [How to solve "window is not defined" errors in React and Next.js | Dev.to](https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97)

- [i18next-chained-backend | npm](https://www.npmjs.com/package/i18next-chained-backend)

### pt_Br

- [[YouTube] Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50](https://www.youtube.com/watch?v=1nVUfZg2dSA)

- [[YouTube] Serverless com ReactJS e Next.js na Vercel | Code/Drops #54](https://www.youtube.com/watch?v=Cz55Jmhfw84)

- [[YouTube] Essa feature fez o Next.js ser o framework mais popular | Code/Drops #59](https://www.youtube.com/watch?v=u1kCtkVR7cE)

- [[YouTube] Como fazer SEO com React, NextJS e Deploy estático feat. Dicas de Performance | Pokedex](https://www.youtube.com/watch?v=c8mVlakBESE)