import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about";

const AboutRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="about"
          element={
            <>
              <About />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default AboutRoute;
