import React from "react";

const History = () => {
  return (
    <> 
      <div className="container">
        <div className="flex">
          <div className="lg:w-3/6">
            <img
              src={require("../../assets/image/history-bg.webp")}
              alt="histry_choco_image"
              className="hidden lg:block"
            />
          </div>
          <div className="lg:w-3/6 sm:w-full lg:px-12 md:px-20 pt-12 sm:px-12 ps-8 bg-no-repeat bg-right-top left-history_paragraph">
            <p className="text-red-700 lg:mb-6 mb-2 font-handwriting text-19">
              About us
            </p>
            <p className="lg:text-4xl text-3xl mb-8 font-extrabold text-red tracking-wider">
              <span className="border-red border-b border-b-4 pb-2">OUR</span>{" "}
              HISTORY
            </p>
            <p className="font-normal lg:text-md text-sm text-justify md:leading-loose leading-normal md:pe-0 pe-7">
              <span className="text-teal-600">Forolly</span> was established in
              Nov 2020. From the snapshot of its creation, the organization put
              the majority of its undertakings to lead the best portrayal of the
              brand Forolly on the Indian market. After the essential exercises
              to promote the <span className="text-teal-600">forolly</span> mark
              in different States, the group focused on building a methodology
              for perhaps the broadest circulation of its items.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
