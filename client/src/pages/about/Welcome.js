import React from "react";
import { aboutWelcomeImg } from "../../assets/constant/Images";

const Welcome = () => {
  return (
    <>
      <div className="bg-gray-100 lg:flex block py-12">
        <div className="flex justify-center items-center px-12 lg:w-6/12">
          <img src={aboutWelcomeImg} alt="Welcome" />
        </div>

        <div className="lg:w-6/12 md:ps-16 ps-8 pe-4">
          <p className="mb-2 text-balck text-2xl">Welcome to</p>
          <p className="text-5xl font-bold text-red font-montserrat">
            <span className="border-red border-b border-b-2 pb-2">FO</span>
            ROLLY
          </p>
          <p className="md:w-8/12 mt-10 leading-7 text-justify">
            <span className="font-semibold">‘Forolly’</span> was
            established in Nov 2020. From the snapshot of its creation, the
            organization put the majority of its undertakings to lead the best
            portrayal of the brand{" "}
            <span className="font-semibold">‘Forolly’</span> on the Indian
            market. After the essential exercises to promote the
            <span className="font-semibold"> ‘Forolly’</span> mark in different
            States, the group focused on building a methodology for perhaps the
            broadest circulation of its items.
          </p>
        </div>
      </div>

      <div className="container md:w-9/12 w-screen md:mx-auto flex lg:px-48 md:px-24 px-8 py-5 border-4 border-white bg-chocolate -mt-12">
        <div className="text-white">
          <i className="fa-solid fa-phone lg:text-5xl md:text-4xl text-2xl"></i>
        </div>
        <div className="ps-8">
          <p className="text-red tracking-wider">
            CALL US IF YOU HAVE ANY QUESTIONS
          </p>
          <p className="text-white tracking-wider md:text-3xl text-xl font-bold">
            +91 9510 270 600
          </p>
        </div>
      </div>
    </>
  );
};
export default Welcome;
