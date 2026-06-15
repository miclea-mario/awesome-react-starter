import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@components/ui/hover-card';
import { Avatar, AvatarFallback } from '@components/ui/avatar';

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
        <SiteHeader title="Hover Card" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Hover Card</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Card overlay displaying summaries upon hover actions.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/hover-card">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="text-primary underline cursor-pointer font-medium">Hover to view details</span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>UI</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-semibold">Shadcn UI Primitives</h4>
                    <p className="text-xs text-muted-foreground">Framework library utilizing Radix UI primitives with Tailwind variables.</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
    
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
