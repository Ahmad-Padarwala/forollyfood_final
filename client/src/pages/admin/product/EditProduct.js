import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import CKEditor from "react-ckeditor-component";
import ShimerUi from "../../components/ShimerUi";
const PORT = process.env.REACT_APP_MYURL;

const EditProduct = () => {
  const [brandData, setBrandData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cateData, setCateData] = useState([]);
  const [prodData, setProdData] = useState({
    brand_id: "",
    cate_id: "",
    title: "",
    short_desc: "",
    long_desc: "",
    image: null,
  });
  const location = useLocation();
  const editId = location.state.id;
  const navigate = useNavigate();

  useEffect(() => {
    getBrandData();
    getCateData();
    getProdData(editId);
  }, [editId]);

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

  //GET PRODUCT DATA WITH ID
  const getProdData = (id) => {
    axios
      .get(`${PORT}product/${id}/5`)
      .then((response) => {
        setProdData(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Product data:", error);
      });
  };

  //EDIT PRODACT DATA SECTION
  const handleEditBrandChange = (event) => {
    setProdData((prevEdit) => ({
      ...prevEdit,
      brand_id: event.target.value,
    }));
  };
  const handleEditCateChange = (event) => {
    setProdData((prevEdit) => ({
      ...prevEdit,
      cate_id: event.target.value,
    }));
  };
  const handleEditFileChange = (event) => {
    setProdData((prevData) => ({
      ...prevData,
      image: event.target.files[0],
    }));
  };
  const handleEditShortChange = (content) => {
    setProdData((prevData) => ({
      ...prevData,
      short_desc: content,
    }));
  };
  const handleEditLongChange = (content) => {
    setProdData((prevData) => ({
      ...prevData,
      long_desc: content,
    }));
  };
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setProdData((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  };
  const saveProductData = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("brand_id", prodData.brand_id);
    formdata.append("cate_id", prodData.cate_id);
    formdata.append("title", prodData.title);
    formdata.append("short_desc", prodData.short_desc);
    formdata.append("long_desc", prodData.long_desc);
    formdata.append("image", prodData.image);

    try {
      const response = await axios.patch(
        `${PORT}product/${editId}/3`,
        formdata
      );
      console.log("Server response:", response.data);
      setLoading(true);
      setTimeout(() => {
        navigate("/product");
      }, 1000);
    } catch (error) {
      console.log("Error in update product data:", error);
    }
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Edit Product</span>
        </div>

        <div className="mt-5">
          <form className="shadow-lg p-5" onSubmit={saveProductData}>
            <div className="mb-3">
              <label
                htmlFor="selectbrand"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Brand Name:
              </label>
              <select
                id="selectbrand"
                name="brand_id"
                value={prodData.brand_id}
                onChange={handleEditBrandChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                aria-label="Default select example"
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
                htmlFor="selectcategory"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Brand Name:
              </label>
              <select
                id="selectcategory"
                name="cate_id"
                value={prodData.cate_id}
                onChange={handleEditCateChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                aria-label="Default select example"
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
                id="producttitile"
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={prodData.title}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="mb-2">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Product Short Description:
              </p>
              <CKEditor
                name="short_desc"
                content={prodData.short_desc}
                events={{
                  change: (evt) => handleEditShortChange(evt.editor.getData()),
                }}
                config={{ enterMode: 2, shiftEnterMode: 1 }}
              />
            </div>
            <div className="mb-2">
              <p className="block mb-2 text-sm font-medium text-gray-900">
                Product Long Description:
              </p>
              <CKEditor
                name="long_desc"
                content={prodData.long_desc}
                events={{
                  change: (evt) => handleEditLongChange(evt.editor.getData()),
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
                onChange={handleEditFileChange}
                className="block w-full text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg cursor-pointer p-2.5"
              />
            </div>
            {loading && <ShimerUi height={97} width={900} />}
            <button
              type="submit"
              className="w-full mb-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Submit
            </button>
            <NavLink
              to="/product"
              type="button"
              className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Back
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
