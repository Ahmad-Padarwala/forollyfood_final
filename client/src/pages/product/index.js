import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Welcome from "./Welcome";
import Product from "./Product";

const index = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Product />
      <Footer />
    </>
  );
};
export default index;
