import React from "react";
import Product from "../../pages/admin/product";
import ViewProduct from "../../pages/admin/product/ViewProduct";
import EditProduct from "../../pages/admin/product/EditProduct";
import AddProduct from "../../pages/admin/product/AddProduct";
import Sidebar from "../../pages/admin/component/Sidebar";
import { Routes, Route } from "react-router-dom";

const ProdRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="product"
          element={
            <>
              <Product />
            </>
          }
        />
        <Route
          path="viewproduct"
          element={
            <>
              <Sidebar />
              <ViewProduct />
            </>
          }
        />
        <Route
          path="editproduct"
          element={
            <>
              <Sidebar />
              <EditProduct />
            </>
          }
        />
        <Route
          path="addproduct"
          element={
            <>
              <Sidebar />
              <AddProduct />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default ProdRoute;
