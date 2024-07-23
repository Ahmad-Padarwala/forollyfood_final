import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPopulatProduct();
  }, []);
  const getPopulatProduct = () => {
    axios
      .get(`${PORT}product/1/3`)
      .then((response) => {
        setPopularProduct(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Product data in Brand.js:", error);
      });
  };

  const handleWatchProduct = (title) => {
    navigate(`/products/aboutproduct/${title}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-5 bg-chocolate bg-no-repeat bg-right-top prod-bg lg:p-14 p-9">
        <div className="lg:flex flex-wrap popular-product">
          <div className="lg:w-4/6 w-full lg:pr-5 pr-0">
            <p className="text-3xl text-red font-bold">
              <span className="border-white border-b border-b-4 pb-2">Pop</span>
              ular Products
            </p>
            <p className="my-10 text-white">
              Chocolate and love go hand in hand – if you want to get on your
              loved one’s good side, feed them a steady supply of confectionery!
              In fact, a study by the Journal of Social and Personal
              Relationships found that eating sweet treats can lead to
              heightened romantic interest.
            </p>
          </div>
          <div className="md:w-4/12 w-full lg:m-auto lg:mt-0 my-5">
            <NavLink
              to="/products"
              className="px-4 bg-white left-20 py-2 text-center inline-block relative rounded text-sm cate-btn product-btn"
            >
              View All Products
            </NavLink>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pb-5 gap-5">
          {popularProduct.map((popular) => {
            return (
              <div className="col-span-1" key={popular.prod_id}>
                <div
                  className="four-card-main pointer py-6 rounded-xl text-center cursor-pointer"
                  onClick={() => {
                    handleWatchProduct(popular.title);
                  }}
                >
                  <p className="text-xl text-white font-semibold">
                    {popular.title}
                  </p>
                  {popular.image && (
                    <img
                      src={`./upload/${popular.image}`}
                      alt="popularProduct"
                      className="four-card-img object-cover mx-auto mt-3"
                      width="187px"
                      height="187px"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
