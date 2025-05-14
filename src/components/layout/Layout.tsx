import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}