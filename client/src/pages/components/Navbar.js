import React, { useState } from "react";
import "../../assets/css/forolly.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav
          className={`navbar text-white font-bold tracking-widest relative flex min-h-20 items-center ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <div className="container">
            <div>
              <NavLink
                to="/"
                className="navbar-brand z-10 absolute top-5 left-9"
              >
                <img
                  src={require("../../assets/image/logo.webp")}
                  className="img-fluid nav-logo"
                  alt="forolly-logo"
                />
              </NavLink>
            </div>

            <div
              className={`navbar-collapse flex items-center ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <div className="navbar-nav flex items-center ml-27%">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
                <NavLink to="/inquiry" className="nav-link">
                  Inquiries
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
                <NavLink
                  to="/view-catalogue"
                  rel="noreferrer noopener"
                  className="px-4 bg-white xl:left-28 lg:left-20  py-2 text-center inline-block relative rounded-full text-sm cate-btn"
                >
                  View Catalogue
                </NavLink>
              </div>
            </div>
            <button
              data-aos="zoom-in-down"
              className={`navbar-toggle hidden ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
