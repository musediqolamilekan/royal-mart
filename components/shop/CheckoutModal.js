import Image from "next/image";
import React, { useState } from "react";
import Success from "./Success";

const CheckoutModal = ({ product, quantity, discountedPrice, onClose }) => {
  const totalPrice = (discountedPrice * quantity).toFixed(2);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    altPhone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000); // Simulate an API call
  };

  if (isSubmitted) {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <button className="close-btn" onClick={onClose}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="#151719"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="24" height="24" fill="none"></rect>
                  <path
                    d="M7 17L16.8995 7.10051"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 7.00001L16.8995 16.8995"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
            <h2 className="modal-title">Success</h2>
          </div>
          <div className="modal__message">
          <Success />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <button className="close-btn" onClick={onClose}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="#151719"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="24" height="24" fill="none"></rect>
                <path
                  d="M7 17L16.8995 7.10051"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 7.00001L16.8995 16.8995"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
          <h2 className="modal-title">Checkout | {product.name}</h2>
        </div>
        <div className="modal__product">
          <div className="modal__product-image">
            <Image src={product.src} alt={product.name} />
          </div>
          <div className="modal__product-details">
            <h3>{product.name}</h3>
            <div className="modal__product-details-box">
              <p><span>Price:</span> ${discountedPrice}</p>
              <p><span>Quantity:</span> {quantity}</p>
              <p><span>Total Price:</span> ${totalPrice}</p>
            </div>
          </div>
        </div>
        <div className="modal__form">
          <h3>Please fill out the form below to process your order</h3>
          <form onSubmit={handleSubmit}>
            <div className="modal__form-box">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modal__form-box">
              <label htmlFor="address">Physical Address</label>
              <input
                id="address"
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modal__form-box">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modal__form-box">
              <label htmlFor="altPhone">Alternative Phone Number</label>
              <input
                id="altPhone"
                name="altPhone"
                type="text"
                value={form.altPhone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="modal__form-btn">
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
