import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../pages/admin/category";
import Sidebar from "../../pages/admin/component/Sidebar";
import AddCategory from "../../pages/admin/category/AddCategory";
import EditCategory from "../../pages/admin/category/EditCategory";

const CategoryRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="category"
          element={
            <>
              <Category />
            </>
          }
        />
        <Route
          path="addcategory"
          element={
            <>
              <Sidebar />
              <AddCategory />
            </>
          }
        />
        <Route
          path="editcategory"
          element={
            <>
              <Sidebar />
              <EditCategory />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default CategoryRoute;
