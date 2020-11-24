import { useTranslation } from 'react-i18next';

import LayoutJsonPlaceholder from 'components/Layout/JsonPlaceholder';

import { InternalLink, NewPageLink } from 'components/Link';

export const JsonPlaceholder = () => {
  const { t } = useTranslation();
  return (
    <LayoutJsonPlaceholder>
      <h1>
        <NewPageLink href="https://jsonplaceholder.typicode.com/">
          JSON Placeholder
        </NewPageLink>
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
