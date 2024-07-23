import React from "react";
import { Routes, Route } from "react-router-dom";
import Brand from "../../pages/admin/brand";

const BrandRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="brand"
          element={
            <>
              <Brand />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default BrandRoute;
