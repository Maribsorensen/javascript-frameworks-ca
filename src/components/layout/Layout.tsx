import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { AppToaster } from '../common/Toaster';

/**
 * Layout component serves as the main layout for the application.
 * It includes a header, footer, and a main content area where child routes are rendered.
 * @returns {JSX.Element} The Layout component.
 */

export function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] gap-4 bg-gray-300">
      <Header />
      <main className="max-w-screen-xl mx-auto w-full px-4">
        <Outlet />
      </main>
      <AppToaster />
      <Footer />
    </div>
  );
}
