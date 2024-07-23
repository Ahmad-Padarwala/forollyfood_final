import React, { useState, useEffect } from "react";
import "../../../assets/css/style.css";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const Dashboard = () => {
  const [contactCount, setContactCount] = useState(0);
  const [seiInquiryCount, setInquiryCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    getContactData();
    getInquiryData();
    getProductData();
  }, []);

  //GET CONTACT DATA
  const getContactData = () => {
    axios
      .get(`${PORT}contact`)
      .then((response) => {
        setContactCount(response.data.length);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };

  //GET CONTACT DATA
  const getInquiryData = () => {
    axios
      .get(`${PORT}inquiry`)
      .then((response) => {
        setInquiryCount(response.data.length);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };

  //GET PRODUCT DATA
  const getProductData = () => {
    axios
      .get(`${PORT}product`)
      .then((response) => {
        setProductCount(response.data.length); 
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };

  return (
    <>
      <div className="px-5 dashboard relative">
        <div className="overview mt-8">
          <div className="title flex align-center">
            <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
            <span className="font-bold ml-3 text-2xl pt-1">Dashboard</span>
          </div>
          <div className="flex items-center justify-between flex-wrap mt-5">
            <div className="boxes box1 flex flex-col items-center bg-blue-500">
              <i className="fa-solid fa-p text-3xl"></i>
              <span className="whitespace-nowrap text-lg font-semibold">
                Total Products
              </span>
              <span className="font-bold text-4xl">{productCount}</span>
            </div>

            <div className="boxes box2 flex flex-col items-center bg-orange-300">
              <i className="fa-solid fa-c text-3xl"></i>
              <span className="whitespace-nowrap text-lg font-semibold">
                Contact
              </span>
              <span className="font-bold text-4xl">{contactCount}</span>
            </div>

            <div className="boxes box3 flex flex-col items-center bg-cyan-300">
              <i className="fa-solid fa-i text-3xl"></i>
              <span className="whitespace-nowrap text-lg font-semibold">
                Inquiry
              </span>
              <span className="font-bold text-4xl">{seiInquiryCount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
