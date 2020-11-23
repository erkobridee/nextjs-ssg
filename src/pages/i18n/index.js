import LayoutI18n from 'components/Layout/I18n';

import { InternalLink, NewPageLink } from 'components/Link';
import ChangeLanguage from 'components/ChangeLanguage';

export const I18n = () => (
  <LayoutI18n>
    <br />
    <ChangeLanguage />
    <h1>
      <NewPageLink href="https://nextjs.org/docs/advanced-features/i18n-routing">
        Internationalized Routing | Nextjs Documentation
      </NewPageLink>
    </h1>
    <ul>
      <li>
        <InternalLink href="/i18n/content">Content</InternalLink>
      </li>
    </ul>
    <hr />
    <InternalLink href="/">Back</InternalLink>
  </LayoutI18n>
);

export default I18n;
