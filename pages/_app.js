import { ErrorBoundary, ScreenSizeInfo, Toaster } from '@components';
import { TooltipProvider } from '@components/ui/tooltip';
import { queryClientConfig } from '@constants/query-client';
import { sitename } from '@site.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../css/index.css';

const queryClient = new QueryClient(queryClientConfig);

/**
 * Root component of the application.
 * Wraps the main page component with layout, theme, and query providers.
 * 
 * @param {object} props - Component properties.
 * @param {React.ComponentType} props.Component - The active page component.
 * @param {object} props.pageProps - Initial props preloaded for the page.
 * @returns {React.ReactElement} The rendered root component tree.
 */
const Root = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <ErrorBoundary>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Component {...pageProps} />
            </TooltipProvider>
          </QueryClientProvider>
        </ThemeProvider>
        <Toaster />

        <ScreenSizeInfo />
      </ErrorBoundary>
    </>
  );
};

export default Root;

