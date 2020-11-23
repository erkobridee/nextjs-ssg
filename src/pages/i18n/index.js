import LayoutI18n from 'components/Layout/I18n';

import { InternalLink, NewPageLink } from 'components/Link';

export const I18n = () => (
  <LayoutI18n>
    <h1>
      <NewPageLink href="https://nextjs.org/docs/advanced-features/i18n-routing">
        Internationalized Routing | Nextjs Documentation
      </NewPageLink>
    </h1>
    page content
    <hr />
    <InternalLink href="/">Back</InternalLink>
  </LayoutI18n>
);

export default I18n;
