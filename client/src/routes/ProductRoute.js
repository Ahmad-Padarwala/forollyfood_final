import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../pages/product";

const ProductRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="products"
          element={
            <>
              <Product />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default ProductRoute;
