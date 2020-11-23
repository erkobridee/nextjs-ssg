import LayoutI18n from 'components/Layout/I18n';

import InternalLink from 'components/Link/Internal';
import ChangeLanguage from 'components/ChangeLanguage';

export const I18n = () => (
  <LayoutI18n>
    <br />
    <ChangeLanguage />
    <h1>Content</h1>
    page content
    <hr />
    <InternalLink href="/i18n">Back</InternalLink>
  </LayoutI18n>
);

export default I18n;
