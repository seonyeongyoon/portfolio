import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useStore from "./../store/store";

function RootLayout() {
  const { isDarkMode } = useStore();

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
