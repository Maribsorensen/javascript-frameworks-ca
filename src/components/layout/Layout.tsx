import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-300">
      <Header />
      <main className="max-w-screen-xl mx-auto w-full px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}