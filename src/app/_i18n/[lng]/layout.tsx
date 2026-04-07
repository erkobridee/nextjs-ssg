import type { Metadata } from 'next';

import { initServerI18next, getT, getResources, generateI18nStaticParams } from 'next-i18next/server';
import { I18nProvider } from 'next-i18next/client';

import i18nConfig from '~/i18n/config';

import BaseLayout from '~/components/layout/Base';

//----------------------------------------------------------------------------//

initServerI18next(i18nConfig);

export async function generateStaticParams() {
  return generateI18nStaticParams();
}

export async function generateMetadata() {
  const { t } = await getT();
  return {
    title: t('title'),
    description: t('description')
  } as Metadata;
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const { lng } = await params;
  const { i18n } = await getT();
  const resources = getResources(i18n);

  return (
    <I18nProvider language={lng} resources={resources}>
      <BaseLayout lang={lng}>{children}</BaseLayout>
    </I18nProvider>
  );
}
