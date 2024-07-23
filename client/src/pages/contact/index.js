import React from "react";
import Navbar from "../components/Navbar";
import Description from "./Description";
import Form from "./Form";
import Footer from "../components/Footer";
import "../../assets/css/style.css";

const index = () => {
  return (
    <>
      <Navbar />
      <Description />
      <Form />
      <Footer />
    </>
  );
};

export default index;
