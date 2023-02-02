import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { FaFolder,FaFile,FaPencilRuler,FaRegChartBar,FaLaptop,FaExclamationCircle} from 'react-icons/fa';
const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar />

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-4 scrollbar-hide">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#292828ee] text-base-300">
            
            {/* {isAdmin && ( */}
              <>
              <li><Link to="/dashboard"><FaLaptop/> Dashboard</Link></li>
                <li><Link to='/dashboard/category'> <FaFolder />Categore</Link></li>
      <li><Link to='/dashboard/storys'> <FaFile />Storys</Link></li>
      <li><Link to='/dashboard/editors'> <FaPencilRuler />Editors</Link></li>
      
      <li><Link to='/dashboard/charts'><FaRegChartBar />Charts</Link></li>
      <li><Link to='/dashboard/reportedStory'><FaExclamationCircle />Reported story</Link></li>
              </>
            {/* )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
