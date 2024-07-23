import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import ShimerUi from "../../components/ShimerUi";
const PORT = process.env.REACT_APP_MYURL;

const EditCategory = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const editId = location.state.id;
  const [cateEdit, setCateEdit] = useState({
    name: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    handleCateEdit(editId);
  }, [editId]);

  const handleCateEdit = (editId) => {
    axios
      .get(`${PORT}category/${editId}`)
      .then((response) => {
        setCateEdit(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setCateEdit((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  };
  const handleEditImageChange = (event) => {
    setCateEdit((prevData) => ({
      ...prevData,
      image: event.target.files[0],
    }));
  };
  const handleSaveEditData = (id) => {
    const formData = new FormData();
    formData.append("description", cateEdit.description);
    formData.append("name", cateEdit.name);
    formData.append("image", cateEdit.image);
    axios
      .put(`${PORT}category/${id}`, formData)
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          navigate("/category");
        }, 1000);
      })
      .catch((error) => {
        console.log("Error updating product data in Product.js: ", error);
      });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Edit Category</span>
        </div>
        {loading && <ShimerUi height={97} width={900} />}
        <div className="mt-5">
          <form className="shadow-lg p-5">
            <div className="mb-6">
              <label
                htmlFor="categoryid"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category Id:
              </label>
              <input
                type="text"
                id="categoryid"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={cateEdit.cate_id}
                onChange={handleEditChange}
                disabled
              />
            </div>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="name"
                placeholder="Enter Category Name..."
                value={cateEdit.name || ""}
                onChange={handleEditChange}
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
                value={cateEdit.description}
                onChange={handleEditChange}
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
                className="block w-full text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg cursor-pointer p-2.5"
                onChange={handleEditImageChange}
              />
            </div>
            <button
              type="button"
              className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
              onClick={() => {
                handleSaveEditData(cateEdit.cate_id);
              }}
            >
              Update
            </button>
            <NavLink
              to="/category"
              type="button"
              className="w-full mt-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Cancel
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
