import React from "react";
import "../../assets/css/forolly.css";

const Welcome = () => {
  return (
    <>
      <div
        className="w-full h-full bg-cover pt-16 lg:pb-40 pb-8 lg:pr-40 md:pr-40 pr-12 drop-shadow-xl"
        id="product-welcome"
      >
        <div
          className="lg:w-2/6 md:w-4/6 w-full lg:ps-0 md:ps-0 ps-8"
          id="welcome-texts"
        >
          <p className="text-lg mb-2">Welcome to our</p>
          <p className="text-red text-4xl font-extrabold font-montserrat">
            <span className="border-red border-b border-b-4 pb-2">FO</span>
            ROLLY
          </p>
          <p className="mt-7 leading-7 text-justify">
            Chocolate and love go hand in hand – if you want to get on your
            loved one’s good side, feed them a steady supply of confectionery!
            In fact, a study by the Journal of Social and Personal Relationships
            found that eating sweet treats can lead to heightened romantic
            interest.
          </p>
        </div>
      </div>
    </>
  );
};
export default Welcome;
