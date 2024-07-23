import React from "react";
import { aboutBg } from "../../assets/constant/Images";

const History = () => {
  return (
    <>
      <div
        className="mx-auto bg-cover lg:px-44 md:px-44 sm:px-24 px-8 lg:py-28 md:py-20 py-12"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div>
          <h1 className="text-yellow lg:text-5xl md:text-5xl text-3xl font-bold tracking-wider font-montserrat">
            Our History
          </h1>
          <p className="text-slate-200 lg:w-2/5 md:2/4 font-normal mt-6 leading-7 tracking-wide text-justify">
            The mission of the ‘Forolly’ is to give youth candy recollections,
            for example, a way that it celebrates God and His arrangement for
            our lives. Our objective for each candy arrange is that it results
            in a “charmed client” who will tell their companions.
          </p>
        </div>
      </div>
    </>
  );
};
export default History;
