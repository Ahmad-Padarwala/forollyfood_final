import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShimerUi from "../../components/ShimerUi";
const PORT = process.env.REACT_APP_MYURL;

const AddCategory = () => {
  //ADD CATEGORY DATA
  const [loading, setLoading] = useState(false);
  const [addcate, setAddCate] = useState({
    name: "",
    description: "",
    image: null,
  });
  const navigate = useNavigate();
  const handleCateChange = (event) => {
    const { name, value } = event.target;
    setAddCate((prevProdData) => ({
      ...prevProdData,
      [name]: value,
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAddCate((prevProdData) => ({
        ...prevProdData,
        image: file,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveCategoryData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", addcate.name);
    formData.append("description", addcate.description);
    formData.append("image", addcate.image);
    axios
      .post(`${PORT}category`, formData)
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          navigate("/category");
        }, 1000);
      })
      .catch((error) => {
        alert("Enter All Details");
        console.log("Error adding Category data in AddCategory.js:", error);
      });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Add Category</span>
        </div>
        {loading && <ShimerUi height={97} width={900} />}
        <div className="mt-5">
          <form className="shadow-lg p-5" onSubmit={saveCategoryData}>
            <div className="mb-6">
              <label
                htmlFor="categoryname"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category Name:
              </label>
              <input
                type="text"
                id="categoryname"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Category Name"
                onChange={handleCateChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="categorydescription"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category Description:
              </label>
              <input
                type="text"
                id="categorydescription"
                name="description"
                placeholder="Enter Category Description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleCateChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="categoryimage"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category Image:
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

export default AddCategory;
