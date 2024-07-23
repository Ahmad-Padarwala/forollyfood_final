import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteModal from "../component/DeleteModal";
const PORT = process.env.REACT_APP_MYURL;

const Category = () => {
  const [cateData, setCateData] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCateData();
  }, []);

  const fetchCateData = () => {
    axios
      .get(`${PORT}category`)
      .then((response) => {
        setCateData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };

  //DELETE CATEGORY
  const openDeleteModal = (brandId) => {
    setSelectedCategoryId(brandId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setSelectedCategoryId(null);
    setIsDeleteModalOpen(false);
  };
  const deleteCategory = () => {
    if (selectedCategoryId) {
      handleDelete(selectedCategoryId);
      closeDeleteModal();
    }
  };
  const handleDelete = (deleteId) => {
    console.log(deleteId);
    axios
      .delete(`${PORT}category/${deleteId}`)
      .then(() => {
        fetchCateData();
      })
      .catch((error) => {
        console.log(error + "in delete");
      });
  };

  //EDIT CATEGORY
  const handleEditCate = (cateId) => {
    navigate("/editcategory", {
      state: { id: cateId },
    });
  };
  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Category</span>
          <NavLink
            to="/addcategory"
            className="absolute right-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <i className="fa-solid fa-plus mr-2"></i>ADD CATEGORY
          </NavLink>
        </div>

        <div className="flex">
          <div className="shadow-lg mt-4 w-full h-min">
            <table className="text-gray-500 w-full">
              <thead className="text-md text-gray-700 bg-gray-100">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-4 py-3">
                    NAME
                  </th>
                  <th scope="col" className="px-4 py-3">
                    DESCRIPTION
                  </th>
                  <th scope="col" className="px-4 py-3">
                    IMAGE
                  </th>
                  <th scope="col" className="px-4 py-3">
                    OPERATION
                  </th>
                </tr>
              </thead>
              <tbody>
                {cateData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      Data is not available.
                    </td>
                  </tr>
                ) : (
                  cateData.map((category) => {
                    return (
                      <tr
                        key={category.cate_id}
                        className="text-center border-b border-gray-300"
                      >
                        <td className="py-4">{category.cate_id}</td>
                        <td className="py-4">{category.name}</td>
                        <td className="py-4">{category.description}</td>
                        <td
                          className="py-4"
                          style={{ textAlign: "-webkit-center" }}
                        >
                          {category.image && (
                            <img
                              src={`./upload/${category.image}`}
                              alt="category_image"
                              width="90px"
                              height="auto"
                            />
                          )}
                        </td>
                        <td className="py-4">
                          <div className="flex justify-center space-x-4">
                            <button
                              className="flex items-center justify-center text-blue-500 border-2 border-blue-500 rounded-bl-xl px-2 py-2 hover:bg-blue-500 hover:text-white transition duration-300"
                              onClick={() => {
                                handleEditCate(category.cate_id);
                              }}
                            >
                              <i className="fa-regular fa-edit"></i>
                            </button>

                            <button
                              className="flex items-center justify-center text-red border-2 border-red rounded-bl-xl px-2 py-2 hover:bg-red hover:text-white transition duration-300"
                              onClick={() => {
                                openDeleteModal(category.cate_id);
                              }}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={deleteCategory}
      />
    </>
  );
};

export default Category;
