import * as React from 'react';

import { useTranslation } from 'react-i18next';

import Layout from 'components/Layout';
import TopNav from 'components/TopNav/Home';

import styles from 'styles/Home.module.scss';

import hello from 'public/hello.json';

export const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Layout className={styles.content} header={<TopNav />}>
      <h1 className={styles.title}>
        {t('Hello')} <a href="https://nextjs.org">Next.js</a> SSG
      </h1>

      <h2>{t('Welcome to React')}</h2>

      <h3>
        <code className={styles.code}>hello.json</code> - {hello.message}
      </h3>

      <p className={styles.description}>
        👉 <code className={styles.code}>SSG</code> -{' '}
        {t('static site generation')}
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
