import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../component/DeleteModal";
import { useNavigate } from "react-router-dom";
const PORT = process.env.REACT_APP_MYURL;

const Inquiry = () => {
  const [getInquiry, setGetInquiry] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInquiryData();
  }, []);

  const fetchInquiryData = () => {
    axios
      .get(`${PORT}inquiry`)
      .then((response) => {
        setGetInquiry(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Inquiry data in Inquiry.js:", error);
      });
  };

  //DELETE CONTACT DATA
  const openDeleteModal = (brandId) => {
    setSelectedBrandId(brandId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setSelectedBrandId(null);
    setIsDeleteModalOpen(false);
  };
  const deleteInquiry = () => {
    if (selectedBrandId) {
      handleDelete(selectedBrandId);
      closeDeleteModal();
    }
  };
  const handleDelete = (deleteId) => {
    axios
      .delete(`${PORT}inquiry/${deleteId}`)
      .then(() => {
        fetchInquiryData();
      })
      .catch((error) => {
        console.log(error + "in delete");
      });
  };

  //VIEW INQUIRY
  const handleViewInquiry = (inqId) => {
    navigate("/viewinquiry", {
      state: { id: inqId },
    });
  };

  return (
    <>
      <div className="relative dashboard px-5 mt-8">
        <div className="title flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">Inquiry</span>
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
                    EMAIL
                  </th>
                  <th scope="col" className="px-4 py-3">
                    NUMBER
                  </th>
                  <th scope="col" className="px-4 py-3">
                    OERATION
                  </th>
                </tr>
              </thead>
              <tbody>
                {getInquiry.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      Data is not available.
                    </td>
                  </tr>
                ) : (
                  getInquiry.map((inquiry) => {
                    return (
                      <tr
                        key={inquiry.id}
                        className="text-center border-b border-gray-300 group"
                      >
                        <td className="py-6">{inquiry.id}</td>
                        <td className="py-6 relative group">{inquiry.name}</td>
                        <td className="py-6">{inquiry.email}</td>
                        <td className="py-6">{inquiry.number}</td>
                        <td>
                          <div className="flex justify-center space-x-4">
                            <button
                              className="flex items-center justify-center text-blue-500 border-2 border-blue-500 rounded-bl-xl px-2 py-2 hover:bg-blue-500 hover:text-white transition duration-300"
                              onClick={() => {
                                handleViewInquiry(inquiry.id);
                              }}
                            >
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <button
                              className="flex items-center justify-center text-red border-2 border-red rounded-bl-xl px-2 py-2 hover:bg-red hover:text-white transition duration-300"
                              onClick={() => {
                                openDeleteModal(inquiry.id);
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
        onDelete={deleteInquiry}
      />
    </>
  );
};

export default Inquiry;
