import PageLayout from '~/components/layout/content/Page';
import InternalLink from '~/components/ui/InternalLink';

//----------------------------------------------------------------------------//

export function JSONPlaceholder() {
  return (
    <PageLayout
      className="xs:items-start flex flex-col items-center justify-between gap-6"
      header={
        <>
          <InternalLink href={'/'} className="link-underline">
            Home
          </InternalLink>

          <span className="link font-medium">JSON Placeholder</span>

          <InternalLink href={'/jsonplaceholder/users'} className="link-underline">
            Users
          </InternalLink>
        </>
      }
    >
      <p>
        <strong>TODO:</strong> define the page JSON Placeholder body
      </p>
    </PageLayout>
  );
}

export default JSONPlaceholder;
