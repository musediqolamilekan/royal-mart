import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/views/Layout";
import MainGrid from "@/components/homePage/MainGrid";
import Clothing from "@/components/categories/Clothing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Electronics from "@/components/categories/Electronics";

const categoryComponents = {
  "clothes-and-watches": Clothing,
  'electronics': Electronics
  // Add other category components here
};

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [inTransition, setInTransition] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCategoryClick = (category) => {
    const newUrl = `/shop/${category.path}`;
    if (activeCategory === category.path) {
      return;
    }

    setInTransition(true);
    setTimeout(() => {
      setActiveCategory(category.path);
      window.history.pushState({ path: newUrl }, '', newUrl);
      setLoading(true);
      setTimeout(() => {
        router.push(newUrl, undefined, { shallow: true });
        setLoading(false);
        setInTransition(false);
      }, 500);
    }, 500);
  };

  const handleDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const CategoryComponent = activeCategory ? categoryComponents[activeCategory] : null;

  useEffect(() => {
    if (router.query.category) {
      const categoryPath = router.query.category;
      const CategoryComponent = categoryComponents[categoryPath];
      if (CategoryComponent) {
        setActiveCategory(categoryPath);
        setLoading(false);
        setInTransition(false);
      }
    }
  }, [router.query.category]);

  return (
    <Layout
      handleDrawer={handleDrawer}
      isDrawerOpen={isDrawerOpen}
      closeDrawer={closeDrawer}
      activeCategory={activeCategory}
      handleCategoryClick={handleCategoryClick}
      inTransition={inTransition}
      loading={loading}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!activeCategory && <MainGrid />}
          {CategoryComponent && <CategoryComponent />}
        </>
      )}
    </Layout>
  );
};

export default HomePage;
