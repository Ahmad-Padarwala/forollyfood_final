import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../component/DeleteModal";
import ShimerUi from "../../components/ShimerUi";
const PORT = process.env.REACT_APP_MYURL;

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [addSlider, setAddSlider] = useState({
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [selectedSliderId, setSelectedSliderId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchSliderData();
  }, []);

  //GET SLIDER DATA
  const fetchSliderData = async () => {
    setLoading(true);
    await axios
      .get(`${PORT}slider`)
      .then((response) => {
        setSliderData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching slider data in Slider.js:", error);
        setLoading(false);
      });
  };

  //add slider
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAddSlider((prevProdData) => ({
        ...prevProdData,
        image: file,
        previewImage: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveSliderData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", addSlider.image);
    setLoading(true);

    await axios
      .post(`${PORT}slider`, formData)
      .then(() => {
        setTimeout(() => {
          fetchSliderData();
        }, 1000);
        const form = e.target;
        form.reset();
      })
      .catch((error) => {
        alert("Enter All Details");
        console.log("Error adding slider data in Slider.js:", error);
        setLoading(false);
      });
  };

  //DELETE BRAND DATA
  const openDeleteModal = (sliderId) => {
    setSelectedSliderId(sliderId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setSelectedSliderId(null);
    setIsDeleteModalOpen(false);
  };
  const deleteSlider = () => {
    if (selectedSliderId) {
      handleDelete(selectedSliderId);
      closeDeleteModal();
    }
  };
  const handleDelete = (deleteId) => {
    axios
      .delete(`${PORT}slider/${deleteId}`)
      .then(() => {
        fetchSliderData();
      })
      .catch((error) => {
        console.log(error + "in delete");
      });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Slider</span>
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
                    IMAGE
                  </th>
                </tr>
              </thead>
              <tbody>
                {sliderData.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-500">
                      Data is not available.
                    </td>
                  </tr>
                ) : (
                  sliderData.map((slider) => {
                    return (
                      <tr
                        key={slider.id}
                        className="text-center border-b border-gray-300 group"
                      >
                        <td className="py-4">{slider.id}</td>
                        <td
                          className="py-4 relative group"
                          style={{ textAlign: "-webkit-center" }}
                        >
                          {slider.image && (
                            <img
                              src={`./upload/${slider.image}`}
                              alt="slider"
                              width="115px"
                            />
                          )}
                          <div className="flex absolute right-10 top-1/3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              className="text-red"
                              onClick={() => {
                                openDeleteModal(slider.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
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
          <div className="w-5/12 absolute top-8 right-0 mt-4 flex justify-center items-center">
            <div className="w-9/12 shadow-lg text-gray-500 px-3 py-2">
              <form method="post" onSubmit={saveSliderData}>
                <p className="font-bold text-xl text-gray-700 mb-3">
                  ADD SLIDER
                </p>
                <div className="grid gap-4 mb-6">
                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium"
                    >
                      Image:
                    </label>
                    <input
                      type="file"
                      id="image"
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
        </div>
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={deleteSlider}
      />
    </>
  );
};

export default Slider;
