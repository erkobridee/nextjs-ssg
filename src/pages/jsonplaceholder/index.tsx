import * as React from 'react';

import { useTranslation } from 'react-i18next';

import LayoutJsonPlaceholder from 'components/Layout/JsonPlaceholder';

import { InternalLink, TargetBlankLink } from 'components/Link';

export const JsonPlaceholder: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <LayoutJsonPlaceholder className="space-y-4">
      <h1 className="mt-8 text-xl">
        <TargetBlankLink href="https://jsonplaceholder.typicode.com/">
          JSON Placeholder
        </TargetBlankLink>
      </h1>

      <ul className="list-inside list-disc">
        <li>
          <InternalLink href="/jsonplaceholder/users">
            {t('Users')}
          </InternalLink>
        </li>
      </ul>

      <InternalLink href="/">{t('Back')}</InternalLink>
    </LayoutJsonPlaceholder>
  );
};

export default JsonPlaceholder;
