import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex-1 overflow-auto bg-slate-50">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
