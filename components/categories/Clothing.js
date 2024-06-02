import React, { useState } from "react";
import MenShop from "../shop/men";
import Footer from "../shared/footer/Footer";
import WomenShop from "../shop/women";

const Clothing = () => {
  const [activeTab, setActiveTab] = useState("Men");
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="shop">
      <h2 className="shop__title">Clothing & Apparel</h2>
      <div className="shop__tab">
        <button
          onClick={() => handleTabChange("Men")}
          className={activeTab === "Men" ? "active-tab" : "inactive-tab"}
        >
          Men Shop
        </button>
        <button
          onClick={() => handleTabChange("Women")}
          className={activeTab === "Women" ? "active-tab" : "inactive-tab"}
        >
          Women Shop
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {activeTab === "Men" && <MenShop />}
          {activeTab === "Women" && <WomenShop />}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Clothing;
