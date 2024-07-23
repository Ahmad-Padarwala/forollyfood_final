import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const EditNutrition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getNutId = location.state.id;
  const [editNutrition, setEditNutrition] = useState({
    energy: "",
    total_fat: "",
    saturated_fat: "",
    trans_fat: "",
    cholesterol: "",
    sodium: "",
    total_carbohydrates: "",
    protien: "",
  });

  useEffect(() => {
    handleNutEdit(getNutId);
  }, [getNutId]);

  const handleNutEdit = () => {
    axios
      .get(`${PORT}nutrition/${getNutId}`)
      .then((response) => {
        setEditNutrition(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
      });
  };

  const handleNutriChange = (event) => {
    const { name, value } = event.target;
    setEditNutrition((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  };
  const handleSaveNutrition = () => {
    axios
      .put(`${PORT}nutrition/${getNutId}`, editNutrition)
      .then((response) => {
        setEditNutrition(response.data);
        navigate("/product");
      })
      .catch((error) => {
        console.log("Errorn Updating nutrition data in nutrition.js " + error);
      });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Edit Nutrition</span>
        </div>
        <div className="mt-5">
          <form method="post" className="shadow-lg p-5">
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Product Id:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {editNutrition.prod_id}
                </p>
              </div>
              <div className="w-1/2 mr-2">
                <p className="block mb-2 text-sm font-medium text-gray-900">
                  Nutrition Id:
                </p>
                <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {editNutrition.nutr_id}
                </p>
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritionenergy"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Energy:
                </label>
                <input
                  type="text"
                  id="nutritionenergy"
                  name="energy"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Energy"
                  value={editNutrition.energy}
                  onChange={handleNutriChange}
                  required
                />
              </div>
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritiontotal_fat"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Total Fat:
                </label>
                <input
                  type="text"
                  id="nutritiontotal_fat"
                  name="total_fat"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter  Total Fat"
                  value={editNutrition.total_fat}
                  onChange={handleNutriChange}
                  required
                />
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritionsaturated_fat"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Saturated Fat:
                </label>
                <input
                  type="text"
                  id="nutritionsaturated_fat"
                  name="saturated_fat"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Saturated Fat"
                  value={editNutrition.saturated_fat}
                  onChange={handleNutriChange}
                  required
                />
              </div>
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritiontrans_fat"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Trans Fat:
                </label>
                <input
                  type="text"
                  id="nutritiontrans_fat"
                  name="trans_fat"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Trans Fat"
                  value={editNutrition.trans_fat}
                  onChange={handleNutriChange}
                  required
                />
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritioncholesterol"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Cholesterol:
                </label>
                <input
                  type="text"
                  id="nutritioncholesterol"
                  name="cholesterol"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Cholesterol"
                  value={editNutrition.cholesterol}
                  onChange={handleNutriChange}
                  required
                />
              </div>
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritionsodium"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sodium:
                </label>
                <input
                  type="text"
                  id="nutritionsodium"
                  name="sodium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Sodium"
                  value={editNutrition.sodium}
                  onChange={handleNutriChange}
                  required
                />
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritiontotal_carbohydrates"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Total Carbohydrates:
                </label>
                <input
                  type="text"
                  id="nutritiontotal_carbohydrates"
                  name="total_carbohydrates"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Total Carbohydrates"
                  value={editNutrition.total_carbohydrates}
                  onChange={handleNutriChange}
                  required
                />
              </div>
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="nutritionprotien"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Protien:
                </label>
                <input
                  type="text"
                  id="nutritionprotien"
                  name="protien"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Protien"
                  value={editNutrition.protien}
                  onChange={handleNutriChange}
                  required
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleSaveNutrition}
              className="w-full mb-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-lg text-sm py-2.5 text-center"
            >
              Submit
            </button>
            <NavLink
              to="/product"
              type="submit"
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

export default EditNutrition;
