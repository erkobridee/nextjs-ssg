import PageLayout from '~/components/layout/content/Page';
import InternalLink from '~/components/ui/InternalLink';
import TargetBlankLink from '~/components/ui/TargetBlankLink';

//----------------------------------------------------------------------------//

export function JSONPlaceholder() {
  return (
    <PageLayout
      className="xs:items-start flex flex-col gap-6"
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
      <h1 className="mt-8 text-xl">
        <TargetBlankLink href="https://jsonplaceholder.typicode.com/" className="link font-medium">
          JSON Placeholder
        </TargetBlankLink>
      </h1>

      <ul className="list-inside list-disc">
        <li>
          <InternalLink href="/jsonplaceholder/users" className="link-underline">
            Users
          </InternalLink>
        </li>
      </ul>
    </PageLayout>
  );
}

export default JSONPlaceholder;
