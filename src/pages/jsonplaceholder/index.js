import LayoutJsonPlaceholder from 'components/Layout/JsonPlaceholder';

import { InternalLink, NewPageLink } from 'components/Link';

export const JsonPlaceholder = () => (
  <LayoutJsonPlaceholder>
    <h1>
      <NewPageLink href="https://jsonplaceholder.typicode.com/">
        JSON Placeholder
      </NewPageLink>
    </h1>
    <ul>
      <li>
        <InternalLink href="/jsonplaceholder/users">Users</InternalLink>
      </li>
      {/* <li>2</li>
				<li>3</li> */}
    </ul>
    <hr />
    <InternalLink href="/">Back</InternalLink>
  </LayoutJsonPlaceholder>
);

export default JsonPlaceholder;
