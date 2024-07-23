import React, { useEffect, useState } from "react";
import axios from "axios";
import ShimerUi from "../components/ShimerUi";
const PORT = process.env.REACT_APP_MYURL;

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSliderData();
  }, []);

  // GET SLIDER DATA
  const fetchSliderData = async () => {
    try {
      const response = await axios.get(`${PORT}slider`);
      setSliderData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching slider data in Slider.js:", error);
      setLoading(false);
    }
  };

  let flag = 0;

  const controller = (x) => {
    flag = flag + x;
    slideshow(flag);
  };

  const slideshow = (num) => {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) {
      return;
    }
    if (num === slides.length) {
      flag = 0;
      num = 0;
    }
    if (num < 0) {
      flag = slides.length - 1;
      num = slides.length - 1;
    }
    for (let y of slides) {
      y.style.display = "none";
    }
    slides[num].style.display = "block";
  };

  useEffect(() => {
    controller(1);
  }, []);

  return (
    <>
      <div className="slider_section">
        {sliderData.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={`./upload/${slide.image}`} alt={`slider-${index}`} />
          </div>
        ))}
        {loading && <ShimerUi height={330} width={1500} />}
        <span className="arrow prev" onClick={() => controller(-1)}>
          &#10094;
        </span>
        <span className="arrow next" onClick={() => controller(1)}>
          &#10095;
        </span>
      </div>
    </>
  );
};

export default Slider;
