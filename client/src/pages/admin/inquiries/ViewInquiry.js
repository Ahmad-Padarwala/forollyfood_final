import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const ViewInquiry = () => {
  const location = useLocation();
  const viewId = location.state.id;
  const [viewInquiry, setViewInquiry] = useState([]);

  useEffect(() => {
    viewInquiryData(viewId);
  }, [viewId]);

  const viewInquiryData = (viewId) => {
    axios
      .get(`${PORT}inquiry/${viewId}`)
      .then((response) => {
        setViewInquiry(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };
  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">View Inquiry</span>
        </div>

        <div className="mt-5">
          <div className="shadow-lg p-5">
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Id:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.id}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Name:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.name}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                role:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.role}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Company:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.company}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Email:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.email}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Number:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.number}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Address:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.address}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Country:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.country}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                State:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.state}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                City:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.city}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                InquiryType:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.inquiryType}
              </p>
            </div>
            <div className="w-full mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Message:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewInquiry.message}
              </p>
            </div>
            <NavLink
              to="/inquiries"
              type="button"
              className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInquiry;
