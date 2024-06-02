import Image from "next/image";
import React from "react";
import Delivery from "../../assets/delivery-truck.png";

const Success = () => {
  return (
    <div className="success">
      <div className="success__box">
      <p>Your order has been successfully submitted!</p>
        <Image src={Delivery} alt="delivery" className="img" />
      </div>
      <p className="success__text">
        You will receive a call shortly to confirm your order. Please be with
        your phone as the dispatch rider is on the way.
      </p>
    </div>
  );
};

export default Success;
