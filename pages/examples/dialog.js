import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';
import Link from 'next/link';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@components/ui/dialog';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';

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
        <SiteHeader title="Dialog" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Dialog</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  A modal overlay dialog component for critical alerts or user inputs.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/dialog">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile Details</DialogTitle>
                  <DialogDescription>Update your login username or handle details here.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3 py-2">
                  <Label htmlFor="dlg-username">Username</Label>
                  <Input id="dlg-username" defaultValue="johndoe" />
                </div>
                <DialogFooter showCloseButton>
                  <Button>Save Settings</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
    
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
