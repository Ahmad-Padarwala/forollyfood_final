import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../component/DeleteModal";
import ShimerUi from "../../components/ShimerUi";
const PORT = process.env.REACT_APP_MYURL;

const Brand = () => {
  const [brandData, setBrandData] = useState([]);
  const [addBrand, setAddBrand] = useState({
    name: "",
    image: null,
    previewImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editBrand, setEditBrand] = useState(null);

  useEffect(() => {
    fetchBrandData();
  }, []);

  //GET BRAND DATA
  const fetchBrandData = async () => {
    setLoading(true);
    await axios
      .get(`${PORT}brand`)
      .then((response) => {
        setBrandData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
        setLoading(false);
      });
  };

  //ADD BRAND DATA
  const handleBrandChange = (event) => {
    const { name, value } = event.target;
    setAddBrand((prevProdData) => ({
      ...prevProdData,
      [name]: value,
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAddBrand((prevProdData) => ({
        ...prevProdData,
        image: file,
        previewImage: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveBrandData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", addBrand.name);
    formData.append("image", addBrand.image);
    setLoading(true);

    await axios
      .post(`${PORT}brand`, formData)
      .then(() => {
        setTimeout(() => {
          fetchBrandData();
        }, 1000);
        const form = e.target;
        form.reset();
      })
      .catch((error) => {
        alert("Enter All Details");
        console.log("Error adding brand data in Brand.js:", error);
        setLoading(false);
      });
  };

  //DELETE BRAND DATA
  const openDeleteModal = (brandId) => {
    setSelectedBrandId(brandId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setSelectedBrandId(null);
    setIsDeleteModalOpen(false);
  };
  const deleteBrand = () => {
    if (selectedBrandId) {
      handleDelete(selectedBrandId);
      closeDeleteModal();
    }
  };
  const handleDelete = (deleteId) => {
    axios
      .delete(`${PORT}brand/${deleteId}`)
      .then(() => {
        fetchBrandData();
      })
      .catch((error) => {
        console.log(error + "in delete");
      });
  };

  //EDIT BRAND DATA
  const openEditForm = (brandId) => {
    setIsEditMode(true);
    handleBrandEdit(brandId);
  };
  const closeEditForm = () => {
    setIsEditMode(false);
    setEditBrand(null);
  };
  const handleBrandEdit = (editId) => {
    axios
      .get(`${PORT}brand/${editId}`)
      .then((response) => {
        const editedBrand = response.data[0];
        editedBrand.brand_id = editId;
        setEditBrand(editedBrand);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditBrand((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  };
  const handleEditImageChange = (event) => {
    setEditBrand((prevData) => ({
      ...prevData,
      image: event.target.files[0],
    }));
  };
  const handleSaveEditData = (id) => {
    const formData = new FormData();
    formData.append("image", editBrand.image);
    formData.append("name", editBrand.name);
    setLoading(true);
    axios
      .put(`${PORT}brand/${id}`, formData)
      .then(() => {
        setTimeout(() => {
          fetchBrandData();
        }, 1000);
        closeEditForm();
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
          <span className="font-bold ml-3 text-2xl pt-1">Brand</span>
        </div>

        <div className="flex">
          <div className="shadow-lg mt-4 w-7/12 h-min">
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
                </tr>
              </thead>
              <tbody>
                {brandData.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-500">
                      Data is not available.
                    </td>
                  </tr>
                ) : (
                  brandData.map((brand) => {
                    return (
                      <tr
                        key={brand.brand_id}
                        className="text-center border-b border-gray-300 group"
                      >
                        <td className="py-4">{brand.brand_id}</td>
                        <td className="py-4 relative group">
                          {brand.name}
                          <div className="flex absolute left-1/4 top-17 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              className="mr-2 text-blue-500"
                              onClick={() => openEditForm(brand.brand_id)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red"
                              onClick={() => {
                                openDeleteModal(brand.brand_id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>

                        <td
                          className="py-4"
                          style={{ textAlign: "-webkit-center" }}
                        >
                          {brand.image && (
                            <img
                              src={`./upload/${brand.image}`}
                              alt="brand_logo"
                              width="115px"
                            />
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
            {loading && <ShimerUi height={97} width={577} />}
          </div>
          {/* ADD BRAND FORM */}
          {!isEditMode && (
            <div className="w-5/12 absolute top-8 right-0 mt-4 flex justify-center items-center">
              <div className="w-9/12 shadow-lg text-gray-500 px-3 py-2">
                <form method="post" onSubmit={saveBrandData}>
                  <p className="font-bold text-xl text-gray-700 mb-3">
                    ADD BRAND
                  </p>
                  <div className="grid gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="brand_name"
                        className="block mb-2 text-sm font-medium"
                      >
                        Brand Name:
                      </label>
                      <input
                        type="text"
                        id="brand_name"
                        className="border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                        name="name"
                        placeholder="Enter Brand Name..."
                        onChange={handleBrandChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="brand_image"
                        className="block mb-2 text-sm font-medium"
                      >
                        Image:
                      </label>
                      <input
                        type="file"
                        id="brand_image"
                        className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer p-2.5"
                        name="image"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
                    >
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* EDIT BRAND FORM */}
          {isEditMode && editBrand && (
            <div className="w-5/12 absolute top-8 right-0 mt-4 flex justify-center items-center">
              <div className="w-9/12 shadow-lg text-gray-500 px-3 py-2">
                <form method="post">
                  <p className="font-bold text-xl text-gray-700 mb-3">
                    EDIT BRAND
                  </p>
                  <div className="grid gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="editbrand_id"
                        className="block mb-2 text-sm font-medium"
                      >
                        Brand Id:
                      </label>
                      <input
                        type="text"
                        id="editbrand_id"
                        className="border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                        name="name"
                        placeholder="Enter Brand Name..."
                        value={editBrand.brand_id}
                        disabled
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="editbrand_name"
                        className="block mb-2 text-sm font-medium"
                      >
                        Brand Name:
                      </label>
                      <input
                        type="text"
                        id="editbrand_name"
                        className="border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                        name="name"
                        placeholder="Enter Brand Name..."
                        value={editBrand.name}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="editbrand_image"
                        className="block mb-2 text-sm font-medium"
                      >
                        Image:
                      </label>
                      <input
                        type="file"
                        id="editbrand_image"
                        className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer p-2.5"
                        name="image"
                        onChange={handleEditImageChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
                      onClick={() => {
                        handleSaveEditData(editBrand.brand_id);
                      }}
                    >
                      UPDATE
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
                      onClick={closeEditForm}
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={deleteBrand}
      />
    </>
  );
};

export default Brand;
