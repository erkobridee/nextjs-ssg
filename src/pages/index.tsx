import * as React from 'react';

import { useTranslation } from 'react-i18next';

import Layout from 'components/Layout';
import TopNav from 'components/TopNav/Home';
import TargetBlank from 'components/Link/TargetBlank';

import hello from 'public/hello.json';

const styles = {
  main: 'justify-center items-center',
  title: 'leading-[1.15] text-[4rem] text-center mt-8 md:mt-0',
  titleLink:
    'no-underline text-blue-500 text-center hover:underline focus:underline active:underline',
  description: 'mt-4 px-8 text-center text-2xl leading-normal',
  code: 'bg-gray-100 rounded-[5px] p-3 text-[1.1rem] font-mono',
  grid: 'flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full',
  card: 'p-6 mt-6 md:w-96 text-left border rounded-xl transition ease-[2s] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-600 focus:border-blue-600 active:border-blue-600',
  cardTitle: 'text-xl font-bold',
  cardText: 'mt-4 text-lg',
};

export const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Layout className={styles.main} header={<TopNav />}>
      <div className="flex flex-col items-center space-y-2">
        <div className={styles.title}>
          {t('Hello')}{' '}
          <a className={styles.titleLink} href="https://nextjs.org">
            Next.js
          </a>{' '}
          SSG
        </div>

        <div>{t('Welcome to React')}</div>

        <div>
          <code className={styles.code}>hello.json</code> - {hello.message}
        </div>
      </div>

      <p className={styles.description}>
        👉{' '}
        <code className={styles.code}>
          <TargetBlank href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
            SSG
          </TargetBlank>
        </code>{' '}
        - {t('static site generation')}
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>{t('Documentation')} &rarr;</h3>
          <p>
            {t('Find in-depth information about Next.js features and API.')}
          </p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>{t('Learn')} &rarr;</h3>
          <p>
            {t('Learn about Next.js in an interactive course with quizzes!')}
          </p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>{t('Examples')} &rarr;</h3>
          <p>
            {t('Discover and deploy boilerplate example Next.js projects.')}
          </p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>{t('Deploy')} &rarr;</h3>
          <p>
            {t(
              'Instantly deploy your Next.js site to a public URL with Vercel.'
            )}
          </p>
        </a>
      </div>
    </Layout>
  );
};

export default Home;
