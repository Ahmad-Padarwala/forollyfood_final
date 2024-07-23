import React from "react";
import { NavLink } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
      <div className="mt-10 text-center lg:px-20 md:px-10 lg:px-5">
        <p className="lg:text-2xl text-xl">Testimonials</p>
        <p className="lg:text-3xl md:text-2xl text-2xl text-red font-bold mt-2 font-montserrat">
          What Our Customers Say
        </p>
        <p className="mt-3 tracking-wider leading-7 lg:text-center text-justify px-5">
          At Forolly Food, we take pride in creating an exceptional chocolate
          experience for our customers. Here's what they have to say about their
          moments of indulgence with our chocolates:
        </p>
        <div className="md:px-0 px-3">
          <NavLink
            target="_blank"
            to="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zClKr7I0NM4wYLRSNagwtjRNTjNONLU0SDEyTDMxtzKosLQwMUhLSk0zSk0zS7M0T_ZiT8svys_JqQQAMIASfQ&q=forolly&rlz=1C1PNBB_enIN1022IN1022&oq=for&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIGCAAQRRg8MhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOzIGCAMQRRg5MgcIBBAAGIAEMg0IBRAAGIMBGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCDI2MzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x395cf3a590d21f47:0x9840fbef2ef6f97c,1,,,,"
          >
            <img
              src={require("../../assets/image/testimen-img.png")}
              className="mx-auto mt-5"
              alt="testimonial"
            />
          </NavLink>
        </div>
      </div>

      <div className="w-full testi-slider-main py-5 md:pb-8 pb-10">
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 text-center text-5xl leading-none text-white testi-slider-text">
            Chocolate Makes Everything Better
          </div>
          <div className="lg:col-span-9 md:col-span-8 sm:col-span-6">
            <div className="flex pt-4">
              <div className="item">
                <img
                  src={require("../../assets/image/bottom-slider1.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item">
                <img
                  src={require("../../assets/image/bottom-slider2.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item" id="bottom-slider">
                <img
                  src={require("../../assets/image/bottom-slider3.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item" id="bottom-slider">
                <img
                  src={require("../../assets/image/bottom-slider4.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item" id="bottom-slider1">
                <img
                  src={require("../../assets/image/bottom-slider5.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
