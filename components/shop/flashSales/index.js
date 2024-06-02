import React, { useEffect, useState } from "react";
import firstTopPick from "../../../assets/shops/topPick-1.jpg";
import secondTopPick from "../../../assets/shops/topPick-2.jpg";
import thirdTopPick from "../../../assets/shops/topPick-3.jpg";
import fourthTopPick from "../../../assets/shops/topPick-4.jpg";
import Image from "next/image";
import Link from "next/link";

const topPicks = [
  {
    src: firstTopPick,
    name: "Men's Fashion 2-in-1 Short Sleeve&Shorts Set - Grey",
    price: "$176.90",
    category: 'flashSales',
    discount: "-30%",
    slash: "$146.90",
  },
  {
    src: secondTopPick,
    name: "Sequels Collection Sequels All Black Sweatshirt With White Stripes",
    price: "$10.87",
    category: 'flashSales',
    discount: "-10%",
    slash: "$9.87",
  },
  {
    src: thirdTopPick,
    name: "3 In 1 Men's Sport Gym Nicker.",
    price: "$247.89",
    category: 'flashSales',
    discount: "-15%",
    slash: "$217.89",
  },
  {
    src: fourthTopPick,
    name: "Naviforce Brown Luxury Men's Leather Strap Wrist Watch",
    price: "$670.80",
    discount: "-70%",
    category: 'flashSales',
    slash: "$370.80",
  },
];

const FlashSales = ({ hours }) => {
  const calculateTimeLeft = (endTime) => {
    const currentTime = new Date().getTime();
    const timeLeft = endTime - currentTime;

    if (timeLeft <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)));
    const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);

    return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
  };

  const [endTime, setEndTime] = useState(new Date().getTime() + hours * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  useEffect(() => {
    if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      clearInterval(timer);
    }
  }, [timeLeft]);

  return (
    <div className="flashSales">
      <div className="flashSales__header">
        <h2 className="title flashSales__title">Flash Sales</h2>
        <div className="flashSales__timer">
          Time Left: {String(timeLeft.hours).padStart(2, '0')}h:
          {String(timeLeft.minutes).padStart(2, '0')}m:
          {String(timeLeft.seconds).padStart(2, '0')}s
        </div>
        <button className="flashSales__btn">See All</button>
      </div>
      <div className="flashSales__container">
        {topPicks.map((pick, index) => (
          <Link href="/" key={index} className="flashSales__item">
            <Image
              src={pick.src}
              alt={pick.name}
              className="flashSales__image"
            />
            <div className="flashSales__details">
              <p className="flashSales__name">{pick.name}</p>
              <p className="flashSales__price">{pick.slash}</p>
              <p className="flashSales__slash">{pick.price}</p>
            </div>
            <div className="flashSales__discount">{pick.discount}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
