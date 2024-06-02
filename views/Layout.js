import Head from "next/head";
import React from "react";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Drawer from "@/components/shared/header/Drawer";
import LeftGrid from "@/components/homePage/LeftGrid";

const Layout = ({
  title,
  description,
  handleDrawer,
  isDrawerOpen,
  closeDrawer,
  children,
  activeCategory,
  handleCategoryClick,
  inTransition,
  loading,
}) => {
  return (
    <>
      <div className={`drawer-slider ${isDrawerOpen ? "drawer--open" : ""}`}>
        <div className="drawer">
          <Drawer closeDrawer={closeDrawer} onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
        </div>
      </div>
      <Head>
        <title>{title ? `${title} - RoyalMart` : "RoyalMart"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Header handleDrawer={handleDrawer} />
      <section className="layout">
        <div className="layout__flex-left">
          <LeftGrid
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />
        </div>
        <div
          className={`layout__flex-main ${
            inTransition ? "fade-exit fade-exit-active" : "fade-enter fade-enter-active"
          }`}
        >
          {children}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
