import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@components/ui/input-group';
import { Mail, Search } from 'lucide-react';

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
        <SiteHeader title="Input Group" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Input Group</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Wraps text inputs with prefixes, icons, or actions.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/input-group">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="max-w-sm flex flex-col gap-4">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <Mail className="size-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="email@address.com" />
              </InputGroup>

              <InputGroup>
                <InputGroupInput placeholder="Search records..." />
                <InputGroupAddon align="inline-end">
                  <Search className="size-4" />
                </InputGroupAddon>
              </InputGroup>
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
