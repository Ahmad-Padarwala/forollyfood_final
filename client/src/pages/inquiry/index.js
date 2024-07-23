import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "./Welcome";
import Form from "./Form";
import Footer from "../components/Footer";
import "../../assets/css/style.css";

const index = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Form />
      <Footer />
    </>
  );
};

export default index;
