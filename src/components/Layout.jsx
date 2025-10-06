import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <Suspense key={location.pathname} fallback={<p>Loading...</p>}>
          {" "}
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
