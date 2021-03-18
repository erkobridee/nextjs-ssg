import * as React from 'react';

import { useTranslation } from 'react-i18next';

import LayoutJsonPlaceholder from 'components/Layout/JsonPlaceholder';

import { InternalLink, TargetBlankLink } from 'components/Link';

export const JsonPlaceholder: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <LayoutJsonPlaceholder>
      <h1>
        <TargetBlankLink href="https://jsonplaceholder.typicode.com/">
          JSON Placeholder
        </TargetBlankLink>
      </h1>
      <ul>
        <li>
          <InternalLink href="/jsonplaceholder/users">
            {t('Users')}
          </InternalLink>
        </li>
      </ul>
      <hr />
      <InternalLink href="/">{t('Back')}</InternalLink>
    </LayoutJsonPlaceholder>
  );
};

export default JsonPlaceholder;
