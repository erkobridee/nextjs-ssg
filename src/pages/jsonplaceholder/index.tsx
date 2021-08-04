import * as React from 'react';

import { useTranslation } from 'react-i18next';

import LayoutJsonPlaceholder from 'components/Layout/JsonPlaceholder';

import { InternalLink, TargetBlankLink } from 'components/Link';

export const JsonPlaceholder: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <LayoutJsonPlaceholder className="space-y-4">
      <h1 className="text-xl mt-8">
        <TargetBlankLink href="https://jsonplaceholder.typicode.com/">
          JSON Placeholder
        </TargetBlankLink>
      </h1>

      <ul className="list-disc list-inside">
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
