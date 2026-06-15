import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { toast } from 'sonner';

export default function Page() {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': 'calc(var(--spacing) * 72)',
        '--header-height': 'calc(var(--spacing) * 12)',
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Sonner" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Sonner</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Dynamic notifications trigger toast alert panels.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/sonner">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="flex gap-2">
              <Button onClick={() => toast.success("Process Completed successfully")} variant="outline" className="text-green-600 border-green-200">
                Show Success
              </Button>
              <Button onClick={() => toast.error("Process aborted due to timeout")} variant="outline" className="text-destructive border-destructive/20">
                Show Error
              </Button>
            </div>
    
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
