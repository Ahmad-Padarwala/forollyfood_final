import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact";

const ContactRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default ContactRoute;
