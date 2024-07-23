import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { forollyLogo } from "../../assets/constant/Images";
import "../../assets/css/forolly.css";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <div className="w-full bg-footerBg py-8">
        <div className="text-center py-5">
          <p className="lg:text-3xl text-2xl tracking-wide font-montserrat font-bold lg:pb-5 pb-3">
            Become a Distributor/Dealer
          </p>
          <p className="md:tracking-wider lg:leading-6 leading-none md:text-md text-md lg:px-36 md:px-20 px-5 text-gray-600 mb-2 footer_top_desc">
            Are you passionate about spreading the joy of delicious chocolates?
            Do you have a knack for business and want to be a part of a thriving
            chocolate community? Look no further! Forolly Food welcomes you to
            become a distributor or dealer and join our chocolate family.
          </p>
          <div>
            <NavLink
              to="/inquiry"
              className="footer-btn text-sm tracking-wider relative inline-block rounded-full font-bold lg:w-44 w-40 py-2.5 md:mr-5 mr-2"
            >
              Dealer Inquiry
            </NavLink>
            <NavLink
              to="/view-catalogue"
              rel="noreferrer noopener"
              className="footer-btn text-sm tracking-wider relative inline-block rounded-full font-bold lg:w-44 w-40 py-2.5 mt-6"
            >
              View Catalogue
            </NavLink>
          </div>
        </div>
      </div>

      <footer>
        <div className="w-full bg-chocolate lg:flex block overflow-hidden">
          <div className="md:flex block lg:w-5/12 w-full">
            <div className="mb-md-0 mb-4 lg:w-3/5 md:w-3/5 w-full text-sm lg:ps-16 md:ps-16 ps-7 pt-9">
              <img
                src={forollyLogo}
                alt="footer-logo"
                width="130px"
                height="auto"
              />
              <p className="my-4 pe-5 text-white tracking-wider text-justify">
                The mission of the ‘Forolly’ is to give youth candy
                recollections, for example, a way that it celebrates God and His
                arrangement for our lives. Our objective for each candy arrange
                is that it results in a “charmed client” who will tell their
                companions.
              </p>
              <span className="footer-icon p-0 grid grid-cols-9 gap-5 text-lg">
                <NavLink
                  to="https://www.facebook.com/people/Forolly-Food-Products/100080207596150/"
                  target="_blank"
                  aria-label="Visit Forolly Food Products on Facebook"
                  className="text-white"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </NavLink>
                <NavLink
                  to="/"
                  aria-label="Visit Forolly Food Products on Twitter"
                  className="text-white"
                >
                  <i className="fa-brands fa-twitter"></i>
                </NavLink>
                <NavLink
                  to="/"
                  aria-label="Visit Forolly Food Products on Linkedin"
                  className="text-white"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </NavLink>
              </span>
            </div>

            <div className="mb-md-0 mb-4 lg:w-2/5 md:w-2/5 sm:w-2/5 w-full text-sm lg:ps-16 md:ps-16 ps-7 lg:pt-9 md:pt-9 pt-2">
              <p className="text-white text-2xl tracking-wider lg:pb-12 pb-7">
                <span className="border-b-2 border-white pb-4">Links</span>
              </p>
              <div>
                <NavLink to="/" className="text-white leading-9">
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink to="/about" className="text-white leading-9">
                  About us
                </NavLink>
              </div>
              <div>
                <NavLink to="/products" className="text-white leading-9">
                  Products
                </NavLink>
              </div>
              <div>
                <NavLink to="/inquiry" className="text-white leading-9">
                  Dealer Inquiries
                </NavLink>
              </div>
              <div>
                <NavLink to="/contact" className="text-white leading-9">
                  Contact us
                </NavLink>
              </div>
            </div>
          </div>

          <div className="md:flex block lg:w-7/12 w-full">
            <div className="lg:w-6/12 md:w-6/12 w-full lg:ps-0 sm:ps-16 md:ps-16 ps-7 mb-4 lg:pt-9 md:pt-9 pt-2">
              <p className="text-white text-2xl tracking-wider lg:pb-12 pb-7">
                <span className="border-b-2 border-white pb-4">Cont</span>act Us
              </p>
              <div className="text-white flex mb-4">
                <div className="text-3xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="ps-4">
                  <p className="tracking-wider pe-5">
                    Survey No. 646, Plot No. 3, 4, 5, Ahmedabad palanpur
                    Highway, Village-Majadar, Ta-vadgam, Dist-Banaskantha,
                    Gujarat-385210, India.
                  </p>
                </div>
              </div>
              <div className="text-white flex mb-4">
                <div className="text-3xl">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="ps-4">
                  <p className="tracking-wider pe-5 mt-3">
                    <NavLink to="tel:+9195102 70600">+91 95102 70600</NavLink>
                  </p>
                </div>
              </div>
              <div className="text-white flex mb-4">
                <div className="text-3xl">
                  <i className="fa-solid fa-envelope-open"></i>
                </div>
                <div className="ps-4">
                  <p className="tracking-wider pe-5 mt-3">
                    <NavLink to="mailto:support@forollyfood.com">
                      support@forollyfood.com
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-6/12 pe-16 lg:ps-6 md:ps-6 sm:ps-16 ps-7 lg:pt-9 md:pt-9 pt-2 lg:mb-0 mb-9">
              <div className="bg-white lg:w-64 w-72 py-6 rounded-2xl text-center">
                <p className="text-2xl tracking-wider leading-6 mb-4 px-2 font-semibold">
                  Subscribe for hot updates
                </p>
                <input
                  className="border border-inherit rounded-md py-1.5 ps-2 border-black mb-4 w-11/12"
                  type="text"
                  placeholder="Enter Name"
                />
                <input
                  className="border border-inherit rounded-md py-1.5 ps-2 border-black mb-4 w-11/12"
                  type="text"
                  placeholder="Enter Email"
                />
                <button className="bg-slate-500 text-white rounded-md px-3 py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
