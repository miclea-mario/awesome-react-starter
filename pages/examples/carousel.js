import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@components/ui/carousel';

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
        <SiteHeader title="Carousel" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Carousel</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  A slideshow component for cycling through elements.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/carousel">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="px-12 w-full max-w-md">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="flex h-36 items-center justify-center p-6 border rounded-lg bg-muted/10 font-mono text-xl">Slide 1</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="flex h-36 items-center justify-center p-6 border rounded-lg bg-muted/10 font-mono text-xl">Slide 2</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="flex h-36 items-center justify-center p-6 border rounded-lg bg-muted/10 font-mono text-xl">Slide 3</div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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
