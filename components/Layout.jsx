import { Menu, MenuButton, ModeToggle, Profile } from '@components';

/**
 * Layout component for the dashboard pages.
 * Displays the navigation menu, page header with title, theme toggle, and user profile.
 * 
 * @param {object} props - Component properties.
 * @param {string} props.title - The page title.
 * @param {React.ReactNode} props.children - Page contents.
 * @returns {React.ReactElement} The rendered layout.
 */
const Layout = ({ title, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-body text-sm dark:bg-background">
      <Menu />
      <main className="max w-full gap-4 p-4 lg:col-span-5 lg:p-8 xl:px-12">
        <div className="mb-12 flex items-center">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Profile />
            <MenuButton />
          </div>
        </div>
        <div className="grid gap-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

