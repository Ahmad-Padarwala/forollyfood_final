import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteModal from "../component/DeleteModal";
const PORT = process.env.REACT_APP_MYURL;

const Product = () => {
  const [prodData, setProdData] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [nuteration, setNuteration] = useState([]);
  const [openStates, setOpenStates] = useState(prodData.map(() => false));

  const toggleDropdown = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  useEffect(() => {
    getProdData();
    getNuteration();
  }, []);

  const getProdData = () => {
    axios
      .get(`${PORT}product`)
      .then((response) => {
        setProdData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Product data in Brand.js:", error);
      });
  };

  //NUTRITION INFORMATION
  const getNuteration = async () => {
    try {
      const response = await axios.get(`${PORT}nutrition`);
      setNuteration(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const hasNutrition = (prod_id) => {
    return nuteration.some((item) => item.prod_id === prod_id);
  };
  //NUTRITION ADD DATA
  const handleNutrition = (nutrId) => {
    navigate("/addnutrition", {
      state: { id: nutrId },
    });
  };
  //VIEW NUTRITION DATA
  const handleViewNutrData = (viewNutIdd) => {
    navigate("/viewnutrition", {
      state: { id: viewNutIdd },
    });
  };

  //EDIT PRODUCT STATUS
  const handleProdStatus = (prodId, newStatus) => {
    axios
      .patch(`${PORT}product/${prodId}/0`, { status: newStatus })
      .then(() => {
        getProdData();
      })
      .catch((error) => {
        console.log(error + " in update");
      });
  };

  //EDIT PRODUCT SLIDER
  const handleProdSlider = (prodId, newSlider) => {
    axios
      .patch(`${PORT}product/${prodId}/1`, { slider: newSlider })
      .then(() => {
        getProdData();
      })
      .catch((error) => {
        console.log(error + " in update");
      });
  };

  //EDIT PRODUCT POPULAR
  const handleProdPopular = (prodId, newPopular) => {
    axios
      .patch(`${PORT}product/${prodId}/2`, { popular: newPopular })
      .then(() => {
        getProdData();
      })
      .catch((error) => {
        console.log(error + " in update");
      });
  };

  //DELETE PRODUCT
  const openDeleteModal = (prodId) => {
    setSelectedProductId(prodId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setSelectedProductId(null);
    setIsDeleteModalOpen(false);
  };
  const deleteCategory = () => {
    if (selectedProductId) {
      handleDelete(selectedProductId);
      closeDeleteModal();
    }
  };
  const handleDelete = (deleteId) => {
    axios
      .delete(`${PORT}product/${deleteId}`)
      .then(() => {
        getProdData();
      })
      .catch((error) => {
        console.log(error + "in delete");
      });
  };

  //VIEW PRODUCT DATA PASS
  const navigate = useNavigate();
  const handleViewData = (viewId) => {
    navigate("/viewproduct", {
      state: { id: viewId },
    });
  };

  // EDIT PRODUCT DATA PASS
  const handleEditProd = (viewId) => {
    navigate("/editproduct", {
      state: { id: viewId },
    });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Products</span>
          <NavLink
            to="/addproduct"
            className="absolute right-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <i className="fa-solid fa-plus mr-2"></i>ADD PRODUCTS
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
                    IMAGE
                  </th>
                  <th scope="col" className="px-4 py-3">
                    STATUS
                  </th>
                  <th scope="col" className="px-4 py-3">
                    SLIDER
                  </th>
                  <th scope="col" className="px-4 py-3">
                    POPULAR
                  </th>
                  <th scope="col" className="px-4 py-3">
                    OPERATION
                  </th>
                </tr>
              </thead>
              <tbody>
                {prodData.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      Data is not available.
                    </td>
                  </tr>
                ) : (
                  prodData.map((product, index) => {
                    const isActive = product.status;
                    const isSlider = product.slider;
                    const isPopular = product.popular;
                    return (
                      <tr
                        key={product.prod_id}
                        className="text-center border-b border-gray-300"
                      >
                        <td className="py-4">{product.prod_id}</td>
                        <td className="py-4">{product.title}</td>
                        <td
                          className="py-4"
                          style={{ textAlign: "-webkit-center" }}
                        >
                          {product.image && (
                            <img
                              src={`./upload/${product.image}`}
                              alt="product_image"
                              width="90px"
                              height="auto"
                            />
                          )}
                        </td>
                        <td>
                          {isActive === 1 ? (
                            <div className="form-check p-2">
                              <input
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                                type="checkbox"
                                id="active"
                                onChange={() => {
                                  handleProdStatus(product.prod_id, 0);
                                }}
                                checked={true}
                              />
                            </div>
                          ) : (
                            <div className="form-check">
                              <input
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                                type="checkbox"
                                id="inactive"
                                onChange={() => {
                                  handleProdStatus(product.prod_id, 1);
                                }}
                                checked={false}
                              />
                            </div>
                          )}
                        </td>
                        <td>
                          {isSlider === 1 ? (
                            <div>
                              <input
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                                type="checkbox"
                                id="active"
                                onChange={() => {
                                  handleProdSlider(product.prod_id, 0);
                                }}
                                checked={true}
                              />
                            </div>
                          ) : (
                            <div>
                              <input
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                                type="checkbox"
                                id="inactive"
                                onChange={() => {
                                  handleProdSlider(product.prod_id, 1);
                                }}
                                checked={false}
                              />
                            </div>
                          )}
                        </td>
                        <td>
                          {isPopular === 1 ? (
                            <div>
                              <input
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                                type="checkbox"
                                id="active"
                                onChange={() => {
                                  handleProdPopular(product.prod_id, 0);
                                }}
                                checked={true}
                              />
                            </div>
                          ) : (
                            <div>
                              <input
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                                type="checkbox"
                                id="inactive"
                                onChange={() => {
                                  handleProdPopular(product.prod_id, 1);
                                }}
                                checked={false}
                              />
                            </div>
                          )}
                        </td>
                        <td className="py-4">
                          <div className="relative">
                            <button
                              type="button"
                              id="dropdownHoverButton"
                              data-dropdown-toggle="dropdownHover"
                              data-dropdown-trigger="hover"
                              className="rounded text-lg p-2"
                              onClick={() => toggleDropdown(index)}
                            >
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            {openStates[index] && (
                              <div
                                id="dropdownHover"
                                className="z-10 absolute bg-white rounded-lg shadow w-40"
                              >
                                <ul
                                  className="py-2 text-sm text-gray-700"
                                  aria-labelledby="dropdownHoverButton"
                                >
                                  <li>
                                    <button
                                      className="text-blue-500 mb-1 hover:underline"
                                      onClick={() => {
                                        handleEditProd(product.prod_id);
                                      }}
                                    >
                                      Edit Product
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="text-red mb-1 hover:underline"
                                      onClick={() => {
                                        openDeleteModal(product.prod_id);
                                      }}
                                    >
                                      Delete Product
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => {
                                        handleViewData(product.prod_id);
                                      }}
                                      className="text-blue-500 mb-1 hover:underline"
                                    >
                                      View Product
                                    </button>
                                  </li>
                                  <hr className="mb-1" />
                                  <li>
                                    {hasNutrition(product.prod_id) ? (
                                      <button
                                        type="button"
                                        className="text-blue-500 mb-1 hover:underline"
                                        onClick={() => {
                                          handleViewNutrData(product.prod_id);
                                        }}
                                      >
                                        View Nutrition
                                      </button>
                                    ) : (
                                      <button
                                        type="button"
                                        className="text-blue-500 hover:underline"
                                        onClick={() => {
                                          handleNutrition(product.prod_id);
                                        }}
                                      >
                                        Add Nutrition
                                      </button>
                                    )}
                                  </li>
                                </ul>
                              </div>
                            )}
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

export default Product;
