import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import DeleteModal from "../component/DeleteModal";
const PORT = process.env.REACT_APP_MYURL;

const ViewNutrition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getNutId = location.state.id;
  const [getNutrition, setGetNutrition] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [nutritionId, setNutritionId] = useState(null);

  useEffect(() => {
    getNutritionData(getNutId);
  }, [getNutId]);

  const getNutritionData = (id) => {
    axios
      .get(`${PORT}nutrition/${id}`)
      .then((response) => {
        setGetNutrition(response.data[0]);
      })
      .catch(() => {
        console.log("Error View Data in Nutrition page");
      });
  };

  //DELETE NUTRITION
  const openDeleteModal = (getNutId) => {
    setNutritionId(getNutId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setNutritionId(null);
    setIsDeleteModalOpen(false);
  };
  const deleteNutrition = () => {
    if (nutritionId) {
      handleDelete(nutritionId);
      closeDeleteModal();
    }
  };
  const handleDelete = () => {
    axios
      .delete(`${PORT}nutrition/${getNutId}`)
      .then(() => {
        navigate("/product");
      })
      .catch((error) => {
        console.log(error + "in delete");
      });
  };

  // EDIT NUTIRTION DATA PASS
  const handleEditNutr = (viewId) => {
    navigate("/editnutrition", {
      state: { id: viewId },
    });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">NUTRITION</span>
        </div>

        <div className="mt-5">
          <div className="shadow-lg p-5">
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Product Id:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.prod_id}
                </p>
              </div>
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Nutrition Id:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.nutr_id}
                </p>
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Energy:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.energy}
                </p>
              </div>
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Total Fat:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.total_fat}
                </p>
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Saturated Fat:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.saturated_fat}
                </p>
              </div>
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Trans Fat:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.trans_fat}
                </p>
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Cholesterol:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.cholesterol}
                </p>
              </div>
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Sodium:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.sodium}
                </p>
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Total Carbohydrates:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.total_carbohydrates}
                </p>
              </div>
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Protien:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {getNutrition.protien}
                </p>
              </div>
            </div>
            <NavLink
              to="/product"
              type="button"
              className="w-full mb-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Back
            </NavLink>
            <button
              type="button"
              onClick={() => {
                handleEditNutr(getNutrition.prod_id);
              }}
              className="w-full mb-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={openDeleteModal}
              className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={deleteNutrition}
      />
    </>
  );
};

export default ViewNutrition;
