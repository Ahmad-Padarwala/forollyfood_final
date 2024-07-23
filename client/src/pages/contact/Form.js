import React, { useState } from "react";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const Form = () => {
  const [addContact, setAddContact] = useState({
    name: "",
    password: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setAddContact((prevContData) => ({
      ...prevContData,
      [name]: value,
    }));
  };

  const saveContactData = (e) => {
    e.preventDefault();

    //NAME VALIDATION
    if (addContact.name === "") {
      document.getElementById("nameErr").innerHTML =
        "**Please fill the first name";
      return false;
    }
    if (addContact.name.length < 3 && addContact.name.length < 20) {
      document.getElementById("nameErr").innerHTML =
        "**name length is must between 3 and 20";
      return false;
    }
    if (!isNaN(addContact.name)) {
      document.getElementById("nameErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("nameErr").innerHTML = "";

    //PASSWORD VALIDATION
    if (addContact.password === "") {
      document.getElementById("passErr").innerHTML =
        "**Please enter a Password";
      return false;
    }
    if (addContact.password.length < 6) {
      document.getElementById("passErr").innerHTML =
        "**Password should be atleast 6 character long";
      return false;
    }
    document.getElementById("passErr").innerHTML = "";

    //EMAIL VALIDATION
    let regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    if (addContact.email === "") {
      document.getElementById("emailErr").innerHTML =
        "**Please enter an e-mail address.";
      return false;
    }
    if (!regEmail.test(addContact.email)) {
      document.getElementById("emailErr").innerHTML =
        "**Please enter a valid e-mail address.";
      return false;
    }
    document.getElementById("emailErr").innerHTML = "";

    //SUBJECT VALIDATION
    if (addContact.subject === "") {
      document.getElementById("subjectErr").innerHTML =
        "**Please fill the Subject";
      return false;
    }
    if (addContact.subject.length < 3) {
      document.getElementById("subjectErr").innerHTML =
        "**Subject length is must greater then 3";
      return false;
    }
    if (!isNaN(addContact.subject)) {
      document.getElementById("subjectErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("subjectErr").innerHTML = "";

    //MESSAGE VALIDATION
    if (addContact.message === "") {
      document.getElementById("messageErr").innerHTML =
        "**Please fill the Message";
      return false;
    }
    if (addContact.message.length < 3) {
      document.getElementById("messageErr").innerHTML =
        "**Subject length is must greater then 3";
      return false;
    }
    if (!isNaN(addContact.message)) {
      document.getElementById("messageErr").innerHTML =
        "**do not allow number in Message";
      return false;
    }
    document.getElementById("messageErr").innerHTML = "";

    axios
      .post(`${PORT}contact`, addContact)
      .then(() => {
        setIsSuccessToastVisible(true);
        const form = e.target;
        form.reset();
        setTimeout(() => {
          setIsSuccessToastVisible(false);
        }, 5000);
      })
      .catch((error) => {
        alert("Enter All Details");
        console.log("Error adding brand data in Product.js:", error);
      });
  };

  return (
    <>
      <div className="mx-auto rounded-lg shadow-amber-700 ">
        <div className="flex flex-col lg:flex-row text-white">
          <div className="lg:w-4/12 rounded-lg shadow-amber-700 cont-info-main px-4 py-8">
            <p className="font-semibold text-2xl ps-4">Contact Information</p>
            <div className="mt-5 flex">
              <div>
                <p className="text-3xl font-black mt-5">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </p>
              </div>
              <div className="ps-4 mt-3">
                <p className="font-bold text-lg my-1">Location</p>
                <p className="text-base leading-snug mt-1">
                  Survey No. 646, Plot No. 3, 4, 5, Ahmedabad palanpur Highway,
                  Village-Majadar, Ta-vadgam, Dist-Banaskantha, Gujarat-385210,
                  India.
                </p>
              </div>
            </div>

            <div className="mt-5 flex">
              <div>
                <p className="text-3xl font-black mt-5">
                  <i className="fa-solid fa-phone"></i>
                </p>
              </div>
              <div className="ps-4 mt-3">
                <p className="font-bold text-lg my-1">Contact Number</p>
                <p className="text-base leading-snug mt-1">+91 95102 70600</p>
              </div>
            </div>

            <div className="mt-5 flex">
              <div>
                <p className="text-3xl font-black mt-5">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </p>
              </div>
              <div className="ps-4 mt-3">
                <p className="font-bold text-lg my-1">Email Address</p>
                <p className="text-base leading-snug mt-1">
                  support@forollyfood.com
                </p>
              </div>
            </div>

            <div className="text-center mt-5">
              <p className=" font-medium text-xl text-black">FOLLOW US</p>
              <div className="cont-icons mt-3">
                <i className="rounded-full text-xl pt-1.5 w-10 h-10 fa-brands fa-facebook"></i>
                <i className="rounded-full text-xl pt-1.5 w-10 h-10 fa-brands fa-twitter ms-3"></i>
                <i className="rounded-full text-xl pt-1.5 w-10 h-10 fa-brands fa-linkedin-in ms-3"></i>
                <i className="rounded-full text-xl pt-1.5 w-10 h-10 fa-brands fa-instagram ms-3"></i>
                <i className="rounded-full text-xl pt-1.5 w-10 h-10 fa-brands fa-google-plus-g ms-3"></i>
              </div>
            </div>
          </div>

          <div className="lg:w-8/12 text-dark lg:px-8 px-4 py-8">
            <form method="post" onSubmit={saveContactData}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label htmlFor="contactName" className="text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md text-black"
                    placeholder="First Name"
                    onChange={handleContactChange}
                  />
                  <span className="text-red font-bold" id="nameErr"></span>
                </div>
                <div>
                  <label htmlFor="contactPassword" className="text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    id="contactPassword"
                    name="password"
                    className="w-full px-3 py-2 border rounded-md text-black"
                    placeholder="Password"
                    onChange={handleContactChange}
                  />
                  <span className="text-red font-bold" id="passErr"></span>
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="contactEmail" className="text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md text-black"
                  placeholder="Email Address"
                  onChange={handleContactChange}
                />
                <span className="text-red font-bold" id="emailErr"></span>
              </div>

              <div className="mt-3">
                <label htmlFor="contactSubject" className="text-black">
                  Subject
                </label>
                <input
                  type="text"
                  id="contactSubject"
                  name="subject"
                  className="w-full px-3 py-2 border rounded-md text-black"
                  placeholder="Subject"
                  onChange={handleContactChange}
                />
                <span className="text-red font-bold" id="subjectErr"></span>
              </div>

              <div className="mt-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="text-black"
                >
                  Your Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md text-black"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Your Message"
                  name="message"
                  onChange={handleContactChange}
                ></textarea>
                <span className="text-red font-bold" id="messageErr"></span>
              </div>

              <button type="submit" className="mt-5 form-button">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.3880099113603!2d72.39168737522068!3d24.052637078465356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf3a590d21f47%3A0x9840fbef2ef6f97c!2sForolly!5e0!3m2!1sen!2sin!4v1683550783325!5m2!1sen!2sin"
          width="99.99%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
            Your Contact send successfully
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
