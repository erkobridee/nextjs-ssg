# Next.js (SSG) + Tailwind CSS (postcss, sass, clsx) + TypeScript + i18next : Starter

> [Next.js SSG - Static Site Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

`npx create-next-app nextjs-ssg --use-npm`

ℹ️&nbsp;&nbsp;use the [node.js](https://nodejs.org/en/) v16 LTS

## Bootstrap a new project using this template

You can do it following one of the 2 options bellow:

### 1. Using `create-next-app`

```
npx create-next-app -e https://github.com/erkobridee/nextjs-ssg ${new project name}
```

### 2. Use this repository as template

![use this template](https://docs.github.com/assets/images/help/repository/use-this-template-button.png)

[Creating a repository from a template | GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Getting Started

First, run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Bundle Analize

```bash
npm run bundle-analyze
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Useful links

- [Next.js](https://nextjs.org/)

  - [Next.js v12](https://nextjs.org/blog/next-12)

    - [[YouTube] Next.js 12 is a Beast | Fireship](https://www.youtube.com/watch?v=lRQ5z7i7pxE)

    - [[YouTube Playlist] Next.js Conf 2021](https://www.youtube.com/playlist?list=PLBnKlKpPeagnJYpc5geAHU40ld5hk8i82)

    - **Known issue:** some thrid-party libraries doesn't work correctly when it's bundled using the [swcMinify](https://nextjs.org/docs/upgrading#swc-replacing-terser-for-minification)

  - [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app)

  - [Markdown/MDX with Next.js](https://nextjs.org/blog/markdown)

  - [Data Fetching | Nextjs Documentation](https://nextjs.org/docs/basic-features/data-fetching)

    - [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) - fetch data at build time

    - [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) - generate static files

  - [[GitHub] next.js/examples/gh-pages/](https://github.com/vercel/next.js/tree/master/examples/gh-pages)

  - [[GitHub] next.js/examples/with-jest/](https://github.com/vercel/next.js/tree/master/examples/with-jest)

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

- [[GitHub] newhighsco/next-plugin-svgr](https://github.com/newhighsco/next-plugin-svgr) - SVGR plugin for Next.js

- [[GitHub] toplenboren/simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)

### TypeScript

`npm install --save-dev typescript @types/react @types/node`

- [TypeScript Language](https://www.typescriptlang.org/)

- React with TypeScript

  - [React + TypeScript - Cheatsheets](https://github.com/typescript-cheatsheets/react)

  - [useTypescript — A Complete Guide to React Hooks and TypeScript](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)

- [Next.js - Basic Features: TypeScript](https://nextjs.org/docs/basic-features/typescript)

- [Next.js TypeScript Types](https://nextjs.org/learn/excel/typescript/nextjs-types)

  - [TypeScript Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

- [Using Next.js with TypeScript | LogRocket](https://blog.logrocket.com/using-next-js-with-typescript/) - 2020/12/18

- [How to setup NextJS with TypeScript and ESLint + prettier | De Code Natura](https://decodenatura.com/how-to-set-up-nextjs-typescript-eslint-prettier/) - 2020/05/18

### Testing

- [Testing | Next.js Docs](https://nextjs.org/docs/testing)

- [How to Set Up Jest and React Testing Library with Next.js | Kyrell Dixon](https://www.kyrelldixon.com/blog/setup-jest-and-react-testing-library-with-nextjs)

- [How to create Next.js project with TypeScript, Jest, React Testing Lib | Night Zen](https://nightzen.dev/how-to-create-a-nextjs-project-with-typescript-jest-react-testing-library-and-test-renderer) - 2021/07/31

- [How to Setup Next.js + TypeScript + Eslint + Storybook + Jest + Enzyme - by Caelin Sutch | JavaScript in Plain English](https://javascript.plainenglish.io/how-to-setup-next-js-typescript-eslint-storybook-jest-enzyme-610451591df0) - 2020/12/31

### i18n

> the next.js doesn't support natively i18n on the static site generation on the v10 - [i18n with next export calls getStaticProps for each defined lang, but then errors
> #18318](https://github.com/vercel/next.js/issues/18318#issuecomment-723984723)
>
> said that, we need to use the react side i18n approach

`npm i --save i18next i18next-browser-languagedetector react-i18next`

- [i18next](https://www.i18next.com/)

  - [react-i18next](https://react.i18next.com/)

  - [i18next-browser-languagedetector | npm](https://www.npmjs.com/package/i18next-browser-languagedetector)

- [[GitHub] i18next/i18next-parser](https://github.com/i18next/i18next-parser)

- [[GitHub] locize/translation-check](https://github.com/locize/translation-check) - This package shows an overview of your translations. Check which keys are not yet translated.

- [[GitHub] juliandavidmr/i18n-editor](https://github.com/juliandavidmr/i18n-editor) - [web editor](https://juliandavidmr.github.io/i18n-editor/dist/) : Simple JSON localization file manager for i18n json files

- [BabelEdit](https://www.codeandweb.com/babeledit) - (paid) Translation editor for (web) apps

  - [Licenses | BabelEdit Store](https://www.codeandweb.com/store/babeledit-single)

  - [How to translate your React app with react-i18next | BabelEdit Tutorial](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next)

#### i18next plugins that doesn't work with next.js

- [i18next-http-backend | npm](https://www.npmjs.com/package/i18next-http-backend) - `Error: ReactDOMServer does not yet support Suspense.`

- [i18next-localstorage-backend | npm](https://www.npmjs.com/package/i18next-localstorage-backend) - `ReferenceError: window is not defined`

  - [How to solve "window is not defined" errors in React and Next.js | Dev.to](https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97)

- [i18next-chained-backend | npm](https://www.npmjs.com/package/i18next-chained-backend)

### TailwindCSS

- [TailwindCSS](https://tailwindcss.com/)

  - [Using PostCSS as your preprocessor | TailwindCSS Docs](https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor)

    - [[GitHub] tailwindlabs/prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

      - [Automatic Class Sorting with Prettier - Tailwind CSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

- [Craft Scalable, Custom-Made Interfaces with Tailwind CSS | egghead.io](https://egghead.io/courses/craft-scalable-custom-made-interfaces-with-tailwind-css-8dfee898)

- [Connecting React 17, TypeScript, Tailwind CSS, NextJS Into Developers Friendly Application | Hacker Noon](https://hackernoon.com/connecting-react-17-typescript-tailwind-css-nextjs-into-developers-friendly-application-cj283wpv)

- [Customizing PostCSS Config | Next.js Docs](https://nextjs.org/docs/advanced-features/customizing-postcss-config)

- [[YouTube] Building a Headless Ecommerce Store with Tailwind CSS, Shopify, and Next.js - Tailwind Labs](https://www.youtube.com/watch?v=xNMYz74zNHM)

### pt_Br

- [[YouTube] Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50](https://www.youtube.com/watch?v=1nVUfZg2dSA)

- [[YouTube] Serverless com ReactJS e Next.js na Vercel | Code/Drops #54](https://www.youtube.com/watch?v=Cz55Jmhfw84)

- [[YouTube] Essa feature fez o Next.js ser o framework mais popular | Code/Drops #59](https://www.youtube.com/watch?v=u1kCtkVR7cE)

- [[YouTube] Como fazer SEO com React, NextJS e Deploy estático feat. Dicas de Performance | Pokedex](https://www.youtube.com/watch?v=c8mVlakBESE)
