// https://nextjs.org/docs/app/api-reference/file-conventions/not-found

import PageLayout from '~/components/layout/content/Page';
import InternalLink from '~/components/ui/InternalLink';

//----------------------------------------------------------------------------//

export default async function NotFound() {
  return (
    <PageLayout
      className="xs:items-start flex flex-col items-center gap-6"
      header={
        <>
          <InternalLink href={'/'} className="link-underline">
            Home
          </InternalLink>

          <span className="link font-medium">404</span>
        </>
      }
    >
      <h2>Not Found</h2>

      <InternalLink href="/" className="link-underline font-medium">
        Return Home
      </InternalLink>
    </PageLayout>
  );
}
