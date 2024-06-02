import React from "react";
import Bags from "../../../assets/shops/women/women_bags_ThumbnailsV2.png";
import Clothing from "../../../assets/shops/women/Women_clothing_Thumbnails.png";
import Flats from "../../../assets/shops/women/women_flats_Thumbnails.png";
import Watches from "../../../assets/shops/women/women_watches_Thumbnails.png";
import Shoes from "../../../assets/shops/women/Women_shoes_Thumbnails.png";
import Jewelry from "../../../assets/shops/women/women_jewelry_Thumbnails.png";
import Accessories from "../../../assets/shops/women/women_accessories_Thumbnails.png";
import Swimsuit from "../../../assets/shops/women/women_swimsuit_Thumbnails.png";
import Bag from "../../../assets/shops/women/Bag.jpg";
import AccessoriesBanner from "../../../assets/shops/women/Accessories.jpg";
import TShirt from "../../../assets/shops/men/T-shirt.png";
import Image from "next/image";
import TopDeals from "./TopDeals";
import Sneakers from "./Sneakers";
import Shop from "./Shop";

const tabs = [
  { name: Bags, alt: "Bags" },
  { name: Clothing, alt: "Clothing" },
  { name: Flats, alt: "Flats" },
  { name: Watches, alt: "Watches" },
  { name: Shoes, alt: "Shoes" },
  { name: Jewelry, alt: "Jewelry" },
  { name: Accessories, alt: "Accessories" },
  { name: Swimsuit, alt: "Swim Suit" },
];

const WomenShop = () => {
  return (
    <div className="shop__men">
      <div className="shop__men-flex">
        {tabs.map((item, index) => (
          <div key={index} className="shop__men-box">
            <Image src={item.name} alt={item.alt} className="img" />
            <p>{item.alt}</p>
          </div>
        ))}
      </div>
      <div className="shop__banner">
      <Image src={Bag} alt="banner" className="img" />
      <Image src={AccessoriesBanner} alt="banner" className="img" />
      </div>
      <TopDeals />
      <Sneakers />
      <Image src={TShirt} alt="banner" style={{ margin: "20px 0px" }} />
      <Shop />
    </div>
  );
};

export default WomenShop;
