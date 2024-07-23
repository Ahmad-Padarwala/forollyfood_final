import React from "react";
import { Routes, Route } from "react-router-dom";
import Nutrition from "../../pages/admin/nutrition";
import Sidebar from "../../pages/admin/component/Sidebar";
import AddNutrition from "../../pages/admin/nutrition/AddNutrition";
import ViewNutrition from "../../pages/admin/nutrition/ViewNutrition";
import EditNutrition from "../../pages/admin/nutrition/EditNutrition";

const NutritionRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="nutrition"
          element={
            <>
              <Nutrition />
            </>
          }
        />
        <Route
          path="addnutrition"
          element={
            <>
              <Sidebar />
              <AddNutrition />
            </>
          }
        />
        <Route
          path="viewnutrition"
          element={
            <>
              <Sidebar />
              <ViewNutrition />
            </>
          }
        />
        <Route
          path="editnutrition"
          element={
            <>
              <Sidebar />
              <EditNutrition />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default NutritionRoute;
