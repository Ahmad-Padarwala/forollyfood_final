import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../../pages/admin/contact";

const ContactRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="contacts"
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
