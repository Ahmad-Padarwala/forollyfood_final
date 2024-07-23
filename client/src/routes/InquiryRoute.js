import React from "react";
import { Routes, Route } from "react-router-dom";
import Inquiry from "../pages/inquiry";

const InquiryRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="inquiry"
          element={
            <>
              <Inquiry />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default InquiryRoute;
