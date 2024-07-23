import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../component/DeleteModal";
const PORT = process.env.REACT_APP_MYURL;

const Contact = () => {
  const [getContact, setGetContact] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBrandId, setSelectedBrandId] = useState(null);

  useEffect(() => {
    getContactData();
  }, []);
  const getContactData = () => {
    axios
      .get(`${PORT}contact`)
      .then((response) => {
        setGetContact(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Brand data in Brand.js:", error);
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
  const deleteContact = () => {
    if (selectedBrandId) {
      handleDelete(selectedBrandId);
      closeDeleteModal();
    }
  };
  const handleDelete = (deleteId) => {
    axios
      .delete(`${PORT}contact/${deleteId}`)
      .then(() => {
        getContactData();
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
          <span className="font-bold ml-3 text-2xl pt-1">Contact</span>
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
                    PASSWORD
                  </th>
                  <th scope="col" className="px-4 py-3">
                    EMAIL
                  </th>
                  <th scope="col" className="px-4 py-3">
                    SUBJECT
                  </th>
                  <th scope="col" className="px-4 py-3">
                    MESSAGE
                  </th>
                </tr>
              </thead>
              <tbody>
                {getContact.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      Data is not available.
                    </td>
                  </tr>
                ) : (
                  getContact.map((contact) => {
                    return (
                      <tr
                        key={contact.id}
                        className="text-center border-b border-gray-300 group"
                      >
                        <td className="py-6">{contact.id}</td>
                        <td className="py-6 relative group">
                          {contact.name}
                          <div className="flex absolute left-1/4 top-17 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              className="text-red"
                              onClick={() => {
                                openDeleteModal(contact.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                        <td className="py-6">{contact.password}</td>
                        <td className="py-6">{contact.email}</td>
                        <td className="py-6">{contact.subject}</td>
                        <td className="py-6">{contact.message}</td>
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
        onDelete={deleteContact}
      />
    </>
  );
};

export default Contact;
