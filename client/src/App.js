import React from "react";
import AboutRoute from "./routes/AboutRoute";
import ProductRoute from "./routes/ProductRoute";
import InquiryRoute from "./routes/InquiryRoute";
import ContactRoute from "./routes/ContactRoute";
import HomeRoute from "./routes/HomeRoute";
import AboutProductRoute from "./routes/AboutProductRoute";
import DashRoute from "./routes/admin/DashRoute";
import BrandRoute from "./routes/admin/BrandRoute";
import TopSliderRoute from "./routes/admin/TopSliderRoute";
import CategoryRoute from "./routes/admin/CategoryRoute";
import ContactsRoute from "./routes/admin/ContactRoute";
import InquiriesRoute from "./routes/admin/InquiriesRoute";
import LoginRoute from "./routes/admin/LoginRoute";
import ProdRoute from "./routes/admin/ProdRoute";
import NutritionRoute from "./routes/admin/NutritionRoute";

const App = () => {
  return (
    <>
      <AboutRoute />
      <ProductRoute />
      <InquiryRoute />
      <ContactRoute />
      <HomeRoute />
      <TopSliderRoute />
      <AboutProductRoute />
      <DashRoute />
      <BrandRoute />
      <CategoryRoute />
      <ContactsRoute />
      <InquiriesRoute />
      <LoginRoute />
      <ProdRoute />
      <NutritionRoute />
    </>
  );
};

export default App;
