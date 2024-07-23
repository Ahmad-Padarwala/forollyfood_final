import React, { useEffect, useState } from "react";
import axios from "axios";
// import ProductItem from "./ProductItem";
import ShimerUi from "../components/ShimerUi";
import { useNavigate } from "react-router-dom";
const PORT = process.env.REACT_APP_MYURL;

const Product = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = () => {
    setIsLoading(true);
    axios
      .get(`${PORT}product/1/1`)
      .then((response) => {
        setProductData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching Product data in Brand.js:", error);
        setIsLoading(false);
      });
  };

  const handleWatchProduct = (title) => {
    navigate(`/products/aboutproduct/${title}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="text-center lg:px-60 md:px-40 sm:px-20 px-8 px-0 my-12">
        <p className="text-xl mb-2">Our</p>
        <p className="text-red text-4xl font-extrabold mb-5 font-montserrat">
          PRODUCTS
        </p>
        <p className="md:text-center text-justify">
          At Forolly Food, we believe in the purity of ingredients and the
          perfection of craftsmanship. Our chocolates are created using the
          finest cocoa beans and pure, natural ingredients, ensuring an
          unparalleled chocolate experience.
        </p>
      </div>

      <div className="w-full lg:px-12 md:px-12 mt-10">
        <div className="text-center product-item flex flex-wrap">
          {isLoading ? (
            <>
              <div className="product-items mb-10">
                <div className="product-all text-center">
                  <div
                    className="items-center rounded-full cursor-pointer flex justify-center relative"
                    id="product-main"
                  >
                    <ShimerUi height={220} width={220} borderRadius={200} />
                  </div>
                  <p className="font-bold tracking-widest flex justify-center mt-2">
                    <ShimerUi height={15} width={150} />
                  </p>
                </div>
              </div>
              <div className="product-items mb-10">
                <div className="product-all text-center">
                  <div
                    className="items-center rounded-full cursor-pointer flex justify-center relative"
                    id="product-main"
                  >
                    <ShimerUi height={220} width={220} borderRadius={200} />
                  </div>
                  <p className="font-bold tracking-widest flex justify-center mt-2">
                    <ShimerUi height={15} width={150} />
                  </p>
                </div>
              </div>
              <div className="product-items mb-10">
                <div className="product-all text-center">
                  <div
                    className="items-center rounded-full cursor-pointer flex justify-center relative"
                    id="product-main"
                  >
                    <ShimerUi height={220} width={220} borderRadius={200} />
                  </div>
                  <p className="font-bold tracking-widest flex justify-center mt-2">
                    <ShimerUi height={15} width={150} />
                  </p>
                </div>
              </div>
              <div className="product-items mb-10">
                <div className="product-all text-center">
                  <div
                    className="items-center rounded-full cursor-pointer flex justify-center relative"
                    id="product-main"
                  >
                    <ShimerUi height={220} width={220} borderRadius={200} />
                  </div>
                  <p className="font-bold tracking-widest flex justify-center mt-2">
                    <ShimerUi height={15} width={150} />
                  </p>
                </div>
              </div>
            </>
          ) : (
            productData.map((product) => (
              <div className="product-items mb-10" key={product.prod_id}>
                <div className="product-all text-center">
                  <div
                    className="items-center bg-productItemBg rounded-full cursor-pointer flex justify-center relative"
                    id="product-main"
                    onClick={() => {
                      handleWatchProduct(product.title);
                    }}
                  >
                    {product.image && (
                      <img
                        className="prod-img"
                        src={`./upload/${product.image}`}
                        alt="productImages"
                        width="100px"
                      />
                    )}
                  </div>
                  <p className="font-bold tracking-widest">{product.title}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
