import { withAuth } from '@auth';
import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';
import { MyProfile } from '@examples/components';

const Page = () => {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': 'calc(var(--spacing) * 72)',
        '--header-height': 'calc(var(--spacing) * 12)',
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="My Profile" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 p-6">
            <MyProfile />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default withAuth(Page);
