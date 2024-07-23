import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShimerUi from "../../components/ShimerUi";
import CKEditor from "react-ckeditor-component";
const PORT = process.env.REACT_APP_MYURL;

const AddProduct = () => {
  const [brandData, setBrandData] = useState([]);
  const [cateData, setCateData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveProd, setSaveProd] = useState({
    brand_id: "",
    cate_id: "",
    title: "",
    short_desc: "",
    long_desc: "",
    image: null,
  });
  useEffect(() => {
    getBrandData();
    getCateData();
  }, []);

  //GET BRAND DATA
  const getBrandData = () => {
    axios
      .get(`${PORT}brand`)
      .then((response) => {
        setBrandData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };

  //GET CATEGORY DATA
  const getCateData = () => {
    axios
      .get(`${PORT}category`)
      .then((response) => {
        setCateData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };

  //SAVE PRODUCT DATA SECTION START
  const navigate = useNavigate();
  const handleBrandSelect = (event) => {
    setSaveProd((prevEdit) => ({
      ...prevEdit,
      brand_id: event.target.value,
    }));
  };
  const handleCateSelect = (event) => {
    setSaveProd((prevEdit) => ({
      ...prevEdit,
      cate_id: event.target.value,
    }));
  };
  const handleTitleChange = (event) => {
    const { name, value } = event.target;
    setSaveProd((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  };
  const handleShortChange = (content) => {
    setSaveProd((prevData) => ({
      ...prevData,
      short_desc: content,
    }));
  };
  const handleLongChange = (content) => {
    setSaveProd((prevData) => ({
      ...prevData,
      long_desc: content,
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSaveProd((prevProdData) => ({
        ...prevProdData,
        image: file,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveProdData = (e) => {
    e.preventDefault();
    const { brand_id, cate_id, title, short_desc, long_desc, image } = saveProd;
    const formData = new FormData();
    formData.append("brand_id", brand_id);
    formData.append("cate_id", cate_id);
    formData.append("title", title);
    formData.append("short_desc", short_desc);
    formData.append("long_desc", long_desc);
    formData.append("image", image);
    console.log(formData);
    axios
      .post(`${PORT}product`, formData)
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          navigate("/product");
        }, 1000);
      })
      .catch((error) => {
        alert("Error adding product data");
        console.log("Error adding product data in Product.js:", error);
      });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Add Product</span>
        </div>
        <div className="mt-5">
          <form className="shadow-lg p-5" onSubmit={saveProdData}>
            <div className="mb-3">
              <label
                htmlFor="selectbrand"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Brand Name:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="brand"
                aria-label="Default select example"
                onChange={handleBrandSelect}
              >
                <option value="">Select Brand</option>
                {brandData.map((option) => (
                  <option key={option.brand_id} value={option.brand_id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="selectbrand"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Brand Name:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="brand"
                aria-label="Default select example"
                onChange={handleCateSelect}
              >
                <option value="">Select category</option>
                {cateData.map((option) => (
                  <option key={option.cate_id} value={option.cate_id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="producttitile"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title:
              </label>
              <input
                type="text"
                id="categoryname"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Category Name"
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="productshort_desc"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Short Description:
              </label>
              <CKEditor
                name="short_desc"
                content={saveProd.short_desc}
                events={{
                  change: (evt) => handleShortChange(evt.editor.getData()),
                }}
                config={{ enterMode: 2, shiftEnterMode: 1 }}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="productlong_desc"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Long Description:
              </label>
              <CKEditor
                name="long_desc"
                content={saveProd.long_desc}
                events={{
                  change: (evt) => handleLongChange(evt.editor.getData()),
                }}
                config={{ enterMode: 2, shiftEnterMode: 1 }}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="categoryimage"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Image:
              </label>
              <input
                type="file"
                id="categoryimage"
                name="image"
                placeholder="Enter Category Description"
                onChange={handleFileChange}
                className="block w-full text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg cursor-pointer p-2.5"
                required
              />
            </div>
            {loading && <ShimerUi height={97} width={900} />}
            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
