import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="w-full lg:ps-40 md:ps-12 ps-8 py-16 ps-0 bg-redBg inquiry-welcome">
        <div className="lg:w-5/12 md:w-3/5 w-11/12">
          <h1 className="text-slate-200 lg:text-5xl text-3xl font-bold tracking-wider mb-5 font-montserrat">
            Welcome Dealer
          </h1>
          <p className="text-slate-200 tracking-wider text-justify">
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

export default Welcome;
