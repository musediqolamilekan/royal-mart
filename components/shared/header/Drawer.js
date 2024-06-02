import React from "react";
import firstPopular from "../../../assets/popular-1.avif";
import secondPopular from "../../../assets/popular-2.avif";
import thirdPopular from "../../../assets/popular-3.avif";
import fourthPopular from "../../../assets/popular-4.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Clothes & Watches", icon: "👗", path: "clothes-and-watches" },
  { name: "Electronics", icon: "📱", path: "electronics" },
  { name: "Home & Kitchen", icon: "🏠", path: "home-and-kitchen" },
  { name: "Books", icon: "📚", path: "books" },
  { name: "Beauty & Personal Care", icon: "💄", path: "beauty-and-personal-care" },
];

const popularItems = [
  { src: firstPopular, alt: "First Popular", score: 4.6 },
  { src: secondPopular, alt: "Second Popular", score: 4.8 },
  { src: thirdPopular, alt: "Third Popular", score: 4.7 },
  { src: fourthPopular, alt: "Fourth Popular", score: 4.9 },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Drawer = ({ closeDrawer, onCategoryClick, activeCategory }) => {
  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    closeDrawer();
  };

  return (
    <>
      <div className="drawer__flex">
        <div className="drawer__logo">RoyalMart</div>
        <button onClick={closeDrawer} className="btn-box">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 0"
            fill="#151719"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="24" height="24" fill="none"></rect>
              <path
                d="M7 17L16.8995 7.10051"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 7.00001L16.8995 16.8995"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={activeCategory === category.path ? "active" : ""}
          >
            <span role="img" aria-label={category.name}>
              {category.icon}
            </span>{" "}
            {category.name}
          </li>
        ))}
      </ul>
      <div className="drawer__popular">
        <h3>Popular Deals</h3>
        <Link href="/">
          <Slider {...sliderSettings}>
            {popularItems.map((item, index) => (
              <div key={index} className="drawer__popular-box">
                <Image src={item.src} alt={item.alt} className="img" />
                <button>Popularity Score: {item.score}</button>
              </div>
            ))}
          </Slider>
        </Link>
      </div>
    </>
  );
};

export default Drawer;
