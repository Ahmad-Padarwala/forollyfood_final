import React, { useState } from "react";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const Form = () => {
  const [inquiryData, setInquiryData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    number: "",
    address: "",
    country: "",
    state: "",
    city: "",
    inquiryType: "",
    message: "",
  });
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);

  const handleInquiryChange = (event) => {
    const { name, value } = event.target;
    setInquiryData((prevInqData) => ({
      ...prevInqData,
      [name]: value,
    }));
  };
  const saveInquiryData = (e) => {
    e.preventDefault();

    // NAME VALIDATION
    if (inquiryData.name === "") {
      document.getElementById("nameErr").innerHTML =
        "**Please fill the first name";
      return false;
    }
    if (inquiryData.name.length < 3 && inquiryData.name.length < 20) {
      document.getElementById("nameErr").innerHTML =
        "**name length is must between 3 and 20";
      return false;
    }
    if (!isNaN(inquiryData.name)) {
      document.getElementById("nameErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("nameErr").innerHTML = "";

    //ROLE VALIDATION
    if (inquiryData.role === "") {
      document.getElementById("roleErr").innerHTML = "**Please Slect Your Role";
      return false;
    }
    document.getElementById("roleErr").innerHTML = "";

    //COOMPANY VALIDATION
    if (inquiryData.company === "") {
      document.getElementById("companyErr").innerHTML =
        "**Please fill the Company name";
      return false;
    }
    if (inquiryData.company.length < 3) {
      document.getElementById("companyErr").innerHTML =
        "**name length is Greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.company)) {
      document.getElementById("companyErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("companyErr").innerHTML = "";

    //EMAIL VALIDATION
    let regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    if (inquiryData.email === "") {
      document.getElementById("emailErr").innerHTML =
        "**Please enter an e-mail address.";
      return false;
    }
    if (!regEmail.test(inquiryData.email)) {
      document.getElementById("emailErr").innerHTML =
        "**Please enter a valid e-mail address.";
      return false;
    }
    document.getElementById("emailErr").innerHTML = "";

    // MOBILE NUMBER VALIDATION
    if (inquiryData.number === "") {
      document.getElementById("numberErr").innerHTML =
        "**Please fill the mobile no";
      return false;
    }
    if (isNaN(inquiryData.number)) {
      document.getElementById("numberErr").innerHTML =
        "**must write digits only";
      return false;
    }
    if (inquiryData.number.length !== 10) {
      document.getElementById("numberErr").innerHTML =
        "**must write 10 digits only";
      return false;
    }
    document.getElementById("numberErr").innerHTML = "";

    // ADDRESS VALIDATION
    if (inquiryData.address === "") {
      document.getElementById("addressErr").innerHTML =
        "**Please fill the address";
      return false;
    }
    if (inquiryData.address.length < 3) {
      document.getElementById("addressErr").innerHTML =
        "**address length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.address)) {
      document.getElementById("addressErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("addressErr").innerHTML = "";

    // COUNTRY VALIDATION
    if (inquiryData.country === "") {
      document.getElementById("countryErr").innerHTML =
        "**Please fill the country";
      return false;
    }
    if (inquiryData.country.length < 3) {
      document.getElementById("countryErr").innerHTML =
        "**country length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.country)) {
      document.getElementById("countryErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("countryErr").innerHTML = "";

    // STATE VALIDATION
    if (inquiryData.state === "") {
      document.getElementById("stateErr").innerHTML = "**Please fill the state";
      return false;
    }
    if (inquiryData.state.length < 3) {
      document.getElementById("stateErr").innerHTML =
        "**state length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.state)) {
      document.getElementById("stateErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("stateErr").innerHTML = "";

    // CITY VALIDATION
    if (inquiryData.city === "") {
      document.getElementById("cityErr").innerHTML = "**Please fill the city";
      return false;
    }
    if (inquiryData.city.length < 3) {
      document.getElementById("cityErr").innerHTML =
        "**city length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.city)) {
      document.getElementById("cityErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("cityErr").innerHTML = "";

    //INQUIRY TYPE VALIDATION
    if (inquiryData.inquiryType === "") {
      document.getElementById("inquiryTypeErr").innerHTML =
        "**Please Slect Your inquiryType";
      return false;
    }
    document.getElementById("inquiryTypeErr").innerHTML = "";

    //MESSAGE VALIDATION
    if (inquiryData.message === "") {
      document.getElementById("messageErr").innerHTML =
        "**Please fill the Message";
      return false;
    }
    if (inquiryData.message.length < 3) {
      document.getElementById("messageErr").innerHTML =
        "**Message length is must greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.message)) {
      document.getElementById("messageErr").innerHTML =
        "**do not allow number in Message";
      return false;
    }
    document.getElementById("messageErr").innerHTML = "";

    axios
      .post(`${PORT}inquiry`, inquiryData)
      .then(() => {
        setIsSuccessToastVisible(true);
        const form = e.target;
        form.reset();
        setTimeout(() => {
          setIsSuccessToastVisible(false);
        }, 5000); // Hide the toast after 5 seconds
      })
      .catch((error) => {
        alert("Enter All Details");
        console.log("Error adding brand data in Product.js:", error);
      });
  };

  return (
    <>
      <div className="lg:w-3/4 w-11/12 mx-auto my-12 lg:px-8 sm:px-6 px-4 lg:py-12 md:py-16 py-12 rounded-lg inquiry-form">
        <form onSubmit={saveInquiryData}>
          <div className="mb-5">
            <span id="nameErr" className="text-red font-bold"></span>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Name"
              name="name"
              onChange={handleInquiryChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <select
                defaultValue="1"
                name="role"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                aria-label="Default select example"
                onChange={handleInquiryChange}
              >
                <option value="">Who are you?</option>
                <option value="Dealer/Distributor">Dealer/Distributor</option>
                <option value="Customer">Customer</option>
              </select>
              <span id="roleErr" className="text-red font-bold"></span>
            </div>
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Company Name"
                name="company"
                onChange={handleInquiryChange}
              />
              <span
                style={{ color: "red", fontWeight: "bold" }}
                id="companyErr"
              ></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email"
                name="email"
                onChange={handleInquiryChange}
              />
              <span className="text-red font-bold" id="emailErr"></span>
            </div>
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Mobile Number"
                name="number"
                onChange={handleInquiryChange}
              />
              <span className="text-red font-bold" id="numberErr"></span>
            </div>
          </div>
          <div className="mb-5">
            <span className="text-red font-bold" id="addressErr"></span>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Address"
              name="address"
              onChange={handleInquiryChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Country"
                name="country"
                onChange={handleInquiryChange}
              />
              <span className="text-red font-bold" id="countryErr"></span>
            </div>
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="State"
                name="state"
                onChange={handleInquiryChange}
              />
              <span className="text-red font-bold" id="stateErr"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="City"
                name="city"
                onChange={handleInquiryChange}
              />
              <span className="text-red font-bold" id="cityErr"></span>
            </div>
            <div>
              <select
                defaultValue="1"
                name="inquiryType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                aria-label="Default select example"
                onChange={handleInquiryChange}
              >
                <option value="">Inquiry Tpye</option>
                <option value="Customer Queries">Customer Queries</option>
                <option value="Distributor Queries">Distributor Queries</option>
              </select>
              <span className="text-red font-bold" id="inquiryTypeErr"></span>
            </div>
          </div>

          <div className="mb-5">
            <span className="text-red font-bold" id="messageErr"></span>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              name="message"
              placeholder="Message"
              onChange={handleInquiryChange}
            />
          </div>

          <button type="submit" className="form-button">
            Submit Form
          </button>
        </form>
      </div>
      {isSuccessToastVisible && (
        <div
          id="toast-success"
          className="flex fixed top-5 right-5 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">
            Inquiry send successfully
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
