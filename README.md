# Next.js (SSG) + Tailwind CSS (postcss, sass, clsx) + TypeScript + i18next : Starter

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

`npx create-next-app nextjs-ssg --yes`

ℹ️&nbsp;&nbsp;use the [node.js](https://nodejs.org/en/) v22 LTS

## Bootstrap a new project using this template

You can do it following one of the 2 options bellow:

### 1. Using `create-next-app`

```
npx create-next-app -e https://github.com/erkobridee/nextjs-ssg ${new project name}
```

### 2. Use this repository as template

![use this template](https://docs.github.com/assets/images/help/repository/use-this-template-button.png)

[Creating a repository from a template | GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

<!--

TODO: review

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

-->

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js](https://nextjs.org/)

- [Next.js v16](https://nextjs.org/blog/next-16)

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  - [Set up a new Next.js app](https://nextjs.org/learn/pages-router/create-nextjs-app-setup)

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Getting Started: Installation | Next.js Docs](https://nextjs.org/docs/app/getting-started/installation)

  - [Getting Started: Project Structure | Next.js Docs](https://nextjs.org/docs/app/getting-started/project-structure)

  - [How to create a static export of your Next.js application | Next.js Docs](https://nextjs.org/docs/app/guides/static-exports)

  - [Static Site Generation (SSG) | Next.js Docs](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

- [[GitHub] next.js/examples/github-pages/](https://github.com/vercel/next.js/tree/canary/examples/github-pages)

- [[GitHub] nextjs/deploy-github-pages](https://github.com/nextjs/deploy-github-pages) - Next.js template to deploy to GitHub Pages as a static site.

## Useful links

- [[GitHub] toplenboren/simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)

- [Deploying a Static Next.js Site to GitHub Pages — The Right Way in 2025 | by Onur Altuntaş - Medium](https://medium.com/@onuraltuntasbusiness_99398/deploying-a-static-next-js-site-to-github-pages-the-right-way-in-2025-3337d88fb84c)

- [A step‑by‑step guide to hosting a Next.js site on GitHub Pages with a custom domain | Hitesh Shetty](https://hiteshshetty.com/blogs/deploying-a-next-js-static-site-on-github-pages-with-a-custom-domain)

- [[GitHub] gregrickaby/nextjs-github-pages](https://github.com/gregrickaby/nextjs-github-pages)

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
