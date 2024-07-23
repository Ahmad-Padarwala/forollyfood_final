import React from "react";
import AboutProduct from "../pages/aboutProduct";
import { Routes, Route } from "react-router-dom";

const AboutProductRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="products/aboutproduct/:title"
          element={
            <>
              <AboutProduct />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default AboutProductRoute;
