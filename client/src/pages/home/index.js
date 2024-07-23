import React from "react";
import Navbar from "../components/Navbar";
import Slider from "./Slider";
import History from "./History";
import Service from "./Service";
import Popular from "./Popular";
import Testimonial from "./Testimonial";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <History />
      <Service />
      <Popular />
      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
