import React, { useState, useEffect } from "react";
import "../../assets/css/forolly.css";
import axios from "axios";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import ShimerUi from "../components/ShimerUi";
const PORT = process.env.REACT_APP_MYURL;

const ViewProduct = () => {
  const navigate = useNavigate();
  const [aboutProduct, setAboutProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openTab, setOpenTab] = useState(1);
  const [getNutrition, setGetNutrition] = useState([]);
  const [limitProduct, setLimitProduct] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetchAboutProduct();
    fetchProductLimitdata();
  }, [title]);
  useEffect(() => {
    if (aboutProduct && Object.keys(aboutProduct).length > 0) {
      fetchNutritionData();
    }
  }, [aboutProduct]);

  //GET PRODUCT DATA WITH PRODUCT ID
  const fetchAboutProduct = () => {
    setIsLoading(true);
    axios
      .get(`${PORT}getViewProductData/${title}`)
      .then((response) => {
        setAboutProduct(response.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching Product data in Brand.js:", error);
        setIsLoading(false);
      });
  };
  const fetchNutritionData = () => {
    setIsLoading(true);
    axios
      .get(`${PORT}nutrition/${aboutProduct.prod_id}`)
      .then((response) => {
        setGetNutrition(response.data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        console.log("Error View Data in Nutrition page");
        setIsLoading(false);
      });
  };

  const fetchProductLimitdata = () => {
    setIsLoading(true);
    axios
      .get(`${PORT}product/1/4`)
      .then((response) => {
        setLimitProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching Product data in Brand.js:", error);
        setIsLoading(false);
      });
  };

  const handleWatchProduct = async (title) => {
    // setProdId(title);
    await window.scrollTo({ top: 0, behavior: "smooth" });
    await navigate(`/products/aboutproduct/${title}`);
  };

  return (
    <>
      {isLoading ? (
        <div
          className="lg:w-11/12 w-full mx-auto lg:flex block lg:px-4 px-0 py-10"
          style={{ textAlign: "-webkit-center" }}
        >
          <div className="w-3/6">
            <div className="lg:w-3/6 md:w-3/4 w-full">
              <div className="mx-auto rounded-2xl w-4/5 text-center p-auto">
                <ShimerUi width={400} height={350} />
              </div>
            </div>
          </div>
          <div className="lg:w-3/6 md:w-3/5 w-4/5 text-left ps-10">
            <div className="mb-10">
              <ShimerUi width={200} height={30} />
            </div>
            <div className="mb-10">
              <ShimerUi width={200} height={200} />
            </div>
            <div className="mb-10">
              <ShimerUi width={200} height={30} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="lg:w-11/12 w-full mx-auto lg:flex block lg:px-4 px-0 py-10"
          style={{ textAlign: "-webkit-center" }}
        >
          <div className="lg:w-3/6 md:w-3/4 w-full">
            <div className="mx-auto rounded-2xl w-4/5 text-center bg-gray-200 text-left ps-5 p-auto">
              {aboutProduct.image && (
                <img
                  className="prod-img"
                  src={`./upload/${aboutProduct.image}`}
                  alt="productImages"
                />
              )}
            </div>
          </div>
          <div className="lg:w-3/6 md:w-3/5 w-4/5 text-left">
            <div>
              <p className="view-prod-title font-bold tracking-widest leading-10 text-xl">
                {aboutProduct.title}
              </p>
            </div>
            <div
              className="prod-short-desc mt-4"
              dangerouslySetInnerHTML={{ __html: aboutProduct.short_desc }}
            />
            <div>
              <NavLink to="/inquiry" className="view-prod-btn">
                INQUIRY NOW
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row three-tile-of-tab"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal three-tab-head "
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                PRODUCT SPECIFICATION
              </NavLink>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal three-tab-head"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                DESCRIPTION
              </NavLink>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal three-tab-head"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                REVIEW
              </NavLink>
            </li>
          </ul>
          <div className="container mx-auto relative tab-content flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-3 py-5 flex-auto tab">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block lg:ps-7 md:ps-5" : "hidden"}
                  id="link1"
                >
                  <h2 className="nutr-had">Nutrition Information</h2>

                  <div className="w-full overflow-x-auto">
                    <table className="table-auto min-w-full">
                      <tbody>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Energy
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.energy
                              : "Energy not available"}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Total Fat
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.total_fat
                              : "Total Fat not available"}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Saturated Fat
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.saturated_fat
                              : "Saturated Fat not available"}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Trans Fat
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.trans_fat
                              : "Trans Fat not available"}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Cholesterol
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.cholesterol
                              : "Cholesterol Fat not available"}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Sodium
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.sodium
                              : "Sodium Fat not available"}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Total Carbohydrates
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.total_carbohydrates
                              : "Total Carbohydrates not available"}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-white">
                          <th className="bg-gray-200 text-left ps-5 font-semibold">
                            Protein
                          </th>
                          <td className="view-prod-table-td bg-gray-100 ps-5 py-3">
                            {getNutrition
                              ? getNutrition.protien
                              : "Protien Fat not available"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={openTab === 2 ? "block lg:ps-7 md:ps-5" : "hidden"}
                  id="link2"
                >
                  <p>Product Description is not avalible</p>
                </div>
                <div
                  className={openTab === 3 ? "block lg:ps-7 md:ps-5" : "hidden"}
                  id="link3"
                >
                  <div>
                    <p className="text-3xl font-semibold mb-5">Review</p>
                  </div>
                  <div className="prod-review-text">
                    <p>There are no reviews yet.</p>
                    <p>Be the first to review “{aboutProduct.title}”</p>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="reviw-form">
                      <form>
                        <div className="mb-3">
                          <textarea
                            className="review-textarea"
                            name="review"
                            rows="3"
                            placeholder="Your Review *"
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <input
                            className="review-input"
                            type="text"
                            name="name"
                            placeholder="Name *"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="review-input"
                            type="email"
                            name="email"
                            placeholder="Email *"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="me-2"
                            type="checkbox"
                            id="flexCheckChecked"
                          />
                          <label
                            className="reiew-label"
                            htmlFor="flexCheckChecked"
                          >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                        <div className="mb-3">
                          <button type="button" className="review-form-btn">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            limitProduct.map((product) => (
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
                        alt="productImage"
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

export default ViewProduct;
