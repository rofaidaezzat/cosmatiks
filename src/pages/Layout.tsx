import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current page from pathname
  const currentPage = location.pathname.split('/')[1] || 'home';

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <>
      <div>
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
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
