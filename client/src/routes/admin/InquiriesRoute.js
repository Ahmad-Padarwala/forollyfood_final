import React from "react";
import { Routes, Route } from "react-router-dom";
import Inquiries from "../../pages/admin/inquiries";
import Sidebar from "../../pages/admin/component/Sidebar";
import ViewInquiry from "../../pages/admin/inquiries/ViewInquiry";

const InquiriesRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="inquiries"
          element={
            <>
              <Inquiries />
            </>
          }
        />
        <Route
          path="viewinquiry"
          element={
            <>
              <Sidebar />
              <ViewInquiry />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default InquiriesRoute;
