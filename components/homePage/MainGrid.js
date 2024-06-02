import React from "react";
import FirstSlider from "../../assets/slider-1.jpg";
import SecondSlider from "../../assets/slider-2.jpg";
import ThirdSlider from "../../assets/slider-3.png";
import FourthSlider from "../../assets/slider-4.jpg";
import FifthSlider from "../../assets/slider-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import RightGrid from "./RightGrid";
import TopCategories from "../categories/TopCategories";
import TopPicks from "../shop/topPick";
import FlashSales from "../shop/flashSales";
import BillBoard from "../miscellaneous/BillBoard";
import BelowSales from "../miscellaneous/BelowSales";
import Footer from "../shared/footer/Footer";

const MainGrid = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the speed as needed
  };

  const sliderImages = [
    { src: FirstSlider, alt: "First Slide" },
    { src: SecondSlider, alt: "Second Slide" },
    { src: ThirdSlider, alt: "Third Slide" },
    { src: FourthSlider, alt: "Fourth Slide" },
    { src: FifthSlider, alt: "Fifth Slide" },
  ];

  return (
    <div>
      <div className="homePage__wrapper">
        <div className="homePage__main-box">
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="slider-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="slider-image"
                />
              </div>
            ))}
          </Slider>
        </div>
        <RightGrid />
      </div>
      <TopCategories />
      <TopPicks />
      <FlashSales hours={24} />
      <BillBoard />
      <BelowSales />
      <Footer />
    </div>
  );
};

export default MainGrid;
