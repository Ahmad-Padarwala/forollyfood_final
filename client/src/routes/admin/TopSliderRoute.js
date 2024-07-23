import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../../pages/admin/slider";

const TopSliderRoute = () => {
  return (
    <Routes>
      <Route
        path="top-slider"
        element={
          <>
            <Slider />
          </>
        }
      />
    </Routes>
  );
};

export default TopSliderRoute;
