import React, { useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const AddNutrition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nutrId = location.state.id;

  const [nutrition, setNutrition] = useState({
    energy: "",
    total_fat: "",
    saturated_fat: "",
    trans_fat: "",
    cholesterol: "",
    sodium: "",
    total_carbohydrates: "",
    protien: "",
  });
  const handleNutrChange = (event) => {
    const { name, value } = event.target;
    setNutrition((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  };
  const saveNutrition = (e) => {
    e.preventDefault();
    axios
      .post(`${PORT}nutrition/${nutrId}`, nutrition)
      .then(() => {
        navigate("/product", { replace: true });
      })
      .catch((error) => {
        console.log("adding error" + error);
      });
  };
  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Add Nutrition</span>
        </div>
        <div className="mt-5">
          <form
            method="post"
            onSubmit={saveNutrition}
            className="shadow-lg p-5"
          >
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
                  onChange={handleNutrChange}
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
                  onChange={handleNutrChange}
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
                  onChange={handleNutrChange}
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
                  onChange={handleNutrChange}
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
                  onChange={handleNutrChange}
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
                  onChange={handleNutrChange}
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
                  onChange={handleNutrChange}
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
                  onChange={handleNutrChange}
                  required
                />
              </div>
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

export default AddNutrition;
