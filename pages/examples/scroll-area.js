import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { ScrollArea } from '@components/ui/scroll-area';

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
        <SiteHeader title="Scroll Area" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Scroll Area</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Custom scrollbar container for mapping lists.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/scroll-area">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <ScrollArea className="h-40 w-48 rounded-md border p-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-semibold mb-2">Logs List</h4>
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="text-xs py-1 border-b border-border font-mono">
                    schema_v{i + 1}.json
                  </div>
                ))}
              </div>
            </ScrollArea>
    
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
