import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const ViewProduct = () => {
  const location = useLocation();
  const viewId = location.state.id;
  const [viewProdData, setViewProdData] = useState([]);
  const [viewBrand, setViewBrand] = useState([]);
  const [viewCate, setViewCate] = useState([]);

  useEffect(() => {
    getProdData(viewId);
  }, [viewId]);

  const getProdData = (id) => {
    axios
      .get(`${PORT}product/${id}/5`)
      .then((response) => {
        setViewProdData(response.data[0]);
        fetchBrandName(response.data[0].brand_id);
        fetchCateName(response.data[0].cate_id);
      })
      .catch((error) => {
        console.log("Error fetching Product data:", error);
      });
  };

  //GET BRAND NAME
  const fetchBrandName = (id) => {
    axios
      .get(`${PORT}brand/${id}`)
      .then((response) => {
        setViewBrand(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Product data:", error);
      });
  };

  //GET CATEGORY NAME
  const fetchCateName = (id) => {
    axios
      .get(`${PORT}category/${id}`)
      .then((response) => {
        setViewCate(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Product data:", error);
      });
  };
  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Veiw Product</span>
        </div>
        <div className="mt-5">
          <div className="shadow-lg p-5">
            <div className="mb-6">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Id:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewProdData.prod_id}
              </p>
            </div>
            <div className="mb-6">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Brand Name:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {/* {viewBrand.name || "Data not available"} */}
                {viewBrand ? viewBrand.name : "Data not available"}
              </p>
            </div>
            <div className="mb-6">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Category Name:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {/* {viewCate.name || "Data not available"} */}
                {viewCate ? viewCate.name : "Data not available"}
              </p>
            </div>
            <div className="mb-6">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Product Title:
              </p>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                {viewProdData.title || "Data not available"}
              </p>
            </div>
            <div className="mb-6">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Product Short Description:
              </p>
              <p
                className="bg-gray-50 border border-gray-300 text-gray-900
                text-sm rounded-lg p-2.5"
                dangerouslySetInnerHTML={{
                  __html:
                    viewProdData.short_desc || "<p>Data not available</p>",
                }}
              ></p>
            </div>
            <div className="mb-6">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Product Long Description:
              </p>
              <p
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                dangerouslySetInnerHTML={{
                  __html: viewProdData.long_desc || "<p>Data not available</p>",
                }}
              ></p>
            </div>
            <div className="mb-6">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Product Image:
              </p>
              <div>
                {viewProdData.image && (
                  <img
                    src={`./upload/${viewProdData.image}`}
                    alt="productImage"
                    width="100px"
                  />
                )}
              </div>
            </div>

            <NavLink
              to="/product"
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

export default ViewProduct;
