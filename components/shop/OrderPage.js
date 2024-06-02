import Image from "next/image";
import React, { useState } from "react";
import FlashSales from "./flashSales";
import StarRating from "../miscellaneous/StarRating";
import CustomerFeedback from "../miscellaneous/CustomerFeedback";
import { feedbackData } from "@/data/data";
import BelowSales from "../miscellaneous/BelowSales";
import CheckoutModal from "./CheckoutModal";

const OrderPage = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  console.log(product.type)

  const discountedPrice = product.discount
    ? (product.price - (product.price * product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  const handleOrderNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const renderVariationOptions = () => {
    if (product.type === "clothing") {
      return (
        <div className="product__variation">
          <div className="product__variation-option">
            <p className="product__variation-option-header">SELECT OTHER OPTIONS:</p>
            <div className="product__variation-option-wrapper">
              <div className="product__variation-option-flex">
                <Image src={product.src} alt={product.name} className="img" />
                <p>Black</p>
              </div>
              <div className="product__variation-option-flex">
                <Image src={product.src} alt={product.name} className="img" />
                <p>White</p>
              </div>
            </div>
          </div>
          <div className="product__variation-option">
            <p className="product__variation-option-header">Available Size</p>
            <div className="product__variation-option-wrapper">
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="product">
      <span className="product__title">Product Description | {product.name}</span>
      <div className="product__wrapper">
        <div className="product__flex">
          <div className="product__flex-wrapper">
            <div className="product__image">
              <Image src={product.src} alt={product.name} className="img" />
            </div>
            <div className="product__details">
              <h1>{product.name}</h1>
              <div className="product__details-priceBox">
                <span className="product__details-price">${discountedPrice}</span>
                {product.discount && (
                  <>
                    <span className="product__details-slash">${product.price.toFixed(2)}</span>
                    <span className="product__details-discount">{product.discount}% off</span>
                  </>
                )}
              </div>
              <StarRating rating={product.rating} />
              {renderVariationOptions()}
              <div className="product__quantity">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
              <button className="product__details-btn" onClick={handleOrderNowClick}>Order Now</button>
            </div>
          </div>
          <div className="product__desc">
            <h3>Product Details</h3>
            <p>{product.description}</p>
          </div>
          <div className="product__attr">
            <h3>Product Features</h3>
            <table>
              <tbody>
                {Object.entries(product).map(([key, value], index) => (
                  (key !== 'src' && key !== 'name' && key !== 'price' && key !== 'discount' && key !== 'category' && key !== 'link' && key !== 'rating') && (
                    <tr key={index}>
                      <td className="product__attr-label">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
                      <td className="product__attr-value">{value}</td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
          <FlashSales hours={24} />
          <CustomerFeedback feedback={feedbackData} />
          <BelowSales />
        </div>
        {isModalOpen && <CheckoutModal product={product} quantity={quantity} discountedPrice={discountedPrice} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default OrderPage;
