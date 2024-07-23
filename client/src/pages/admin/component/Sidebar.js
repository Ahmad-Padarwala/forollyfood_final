import React, { useState, useEffect } from "react";
import "../../../assets/css/style.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LogOutModal from "../component/LogOutModal";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getUname = localStorage.getItem("unameData");
    if (!getUname) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("unameData");
    navigate("/admin");
  };
  return (
    <>
      <nav className="sidebar fixed top-0 bg-slate-950 text-white left-0 h-full py-4 px-7">
        <div className="text-2xl font-bold ml-8">FOROLLY</div>
        <div className="dashboard-links mt-7">
          <div
            className={`mb-2 cursor-pointer py-2 pl-3 pr-6 rounded-md ${
              location.pathname === "/dashboard"
                ? "bg-blue-500"
                : "hover:bg-blue-500"
            } transition-colors duration-300 flex items-center`}
          >
            <NavLink to="/dashboard">
              <i className="fa-solid fa-house"></i>
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </div>
          <div
            className={`mb-2 cursor-pointer py-2 pl-3 pr-6 rounded-md ${
              location.pathname === "/brand"
                ? "bg-blue-500"
                : "hover:bg-blue-500"
            } transition-colors duration-300 flex items-center`}
          >
            <NavLink to="/brand">
              <i className="fa-solid fa-layer-group"></i>
              <span className="ml-3">Brand</span>
            </NavLink>
          </div>
          <div
            className={`mb-2 cursor-pointer py-2 pl-3 pr-6 rounded-md ${
              location.pathname === "/category"
                ? "bg-blue-500"
                : "hover:bg-blue-500"
            } transition-colors duration-300 flex items-center`}
          >
            <NavLink to="/category">
              <i className="fa-solid fa-layer-group"></i>
              <span className="ml-3">Category</span>
            </NavLink>
          </div>
          <div
            className={`mb-2 cursor-pointer py-2 pl-3 pr-6 rounded-md ${
              location.pathname === "/product"
                ? "bg-blue-500"
                : "hover:bg-blue-500"
            } transition-colors duration-300 flex items-center`}
          >
            <NavLink to="/product">
              <i className="fa-brands fa-product-hunt"></i>
              <span className="ml-3">Product</span>
            </NavLink>
          </div>
          <div
            className={`mb-2 cursor-pointer py-2 pl-3 pr-6 rounded-md ${
              location.pathname === "/top-slider"
                ? "bg-blue-500"
                : "hover:bg-blue-500"
            } transition-colors duration-300 flex items-center`}
          >
            <NavLink to="/top-slider">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
              <span className="ml-3">Top Slider</span>
            </NavLink>
          </div>
          <div
            className={`mb-2 cursor-pointer py-2 pl-3 pr-6 rounded-md ${
              location.pathname === "/contacts"
                ? "bg-blue-500"
                : "hover:bg-blue-500"
            } transition-colors duration-300 flex items-center`}
          >
            <NavLink to="/contacts">
              <i className="fa-solid fa-address-book"></i>
              <span className="ml-3">Contact</span>
            </NavLink>
          </div>
          <div
            className={`mb-32 cursor-pointer py-2 pl-3 pr-6 rounded-md ${
              location.pathname === "/inquiries"
                ? "bg-blue-500"
                : "hover:bg-blue-500"
            } transition-colors duration-300 flex items-center`}
          >
            <NavLink to="/inquiries">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
              <span className="ml-3">Inquiry</span>
            </NavLink>
          </div>

          <div className="mb-2 cursor-pointer py-2 pl-3 pr-6 rounded-md hover:bg-blue-500 border-2 border-blue-500 transition-colors duration-300 flex items-center">
            <button type="button" onClick={handleLogoutClick}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span className="ml-3">Log Out</span>
            </button>
          </div>
        </div>
      </nav>
      <LogOutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLogout={handleLogout}
      />
      <section className="dashboard relative px-6 py-3 bg-slate-950 shadow-md">
        <div className="flex justify-between items-center">
          <div className="relative flex items-center w-5/12 ml-auto">
            <input
              type="text"
              placeholder="Search here..."
              className="border border-gray-300 w-full rounded-md px-3 py-2 pr-10 focus:outline-none"
            />
            <i className="fa-solid fa-search text-gray-600 absolute right-3 top-1/2 transform -translate-y-1/2"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
