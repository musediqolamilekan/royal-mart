import React from "react";
import Bags from "../../../assets/shops/men/Men_bags_Thumbnails.png";
import Clothing from "../../../assets/shops/men/Thumbnails_clothing.png";
import Traditional from "../../../assets/shops/men/Thumbnails_traditional.png";
import Watches from "../../../assets/shops/men/Thumbnails_wristwatches.png";
import Shoes from "../../../assets/shops/men/Mens_Shoes.png";
import Boot from "../../../assets/shops/men/MensFashion_boot.png";
import Accessories from "../../../assets/shops/men/MensFashion_accessories.png";
import Underwear from "../../../assets/shops/men/Men_underwears_Thumbnails.png";
import Sandal from "../../../assets/shops/men/sandal-banner.png";
import TShirt from "../../../assets/shops/men/T-shirt.png";
import Image from "next/image";
import TopDeals from "./TopDeals";
import Sneakers from "./Sneakers";
import Shop from "./Shop";

const tabs = [
  { name: Bags, alt: "Bags" },
  { name: Clothing, alt: "Clothing" },
  { name: Traditional, alt: "Traditional" },
  { name: Watches, alt: "Watches" },
  { name: Shoes, alt: "Shoes" },
  { name: Boot, alt: "Boots" },
  { name: Accessories, alt: "Accessories" },
  { name: Underwear, alt: "Underwears" },
];

const MenShop = () => {
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
      <Image src={Sandal} alt="banner" />
      <TopDeals />
      <Sneakers />
      <Image src={TShirt} alt="banner" style={{ margin: "20px 0px" }} />
      <Shop />
    </div>
  );
};

export default MenShop;
