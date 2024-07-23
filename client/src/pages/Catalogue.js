import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Catalogue = () => {
  return (
    <>
      <Navbar />
      <iframe
        allowfullscreen=""
        className="fp-iframe"
        style={{
          border: "1px solid lightgrey",
          width: "100%",
          height: "600px",
        }}
        src="https://publuu.com/flip-book/313935/725511"
      ></iframe>
      <Footer />
    </>
  );
};

export default Catalogue;
