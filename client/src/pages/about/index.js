import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "./Welcome";
import History from "./History";
import Description from "./Description";
import Footer from "../components/Footer";
import "../../assets/css/forolly.css";

const index = () => {
  return (
    <>
      <Navbar />
      <History />
      <Welcome />
      <Description />
      <Footer />
    </>
  );
};
export default index;
