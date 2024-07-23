import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Catalogue from "../pages/Catalogue";

const HomeRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/view-catalogue"
          element={
            <>
              <Catalogue />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default HomeRoute;
