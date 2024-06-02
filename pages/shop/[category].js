import Clothing from '@/components/categories/Clothing';
import Electronics from '@/components/categories/Electronics';
import Layout from '@/views/Layout';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const categoryComponents = {
  'clothes-and-watches': Clothing,
  'electronics': Electronics
  // Add other category components here
};

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [validCategory, setValidCategory] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [inTransition, setInTransition] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleCategoryClick = (category) => {
    const newUrl = `/shop/${category.path}`;
    if (validCategory === category.path) {
      return;
    }

    setInTransition(true);
    setTimeout(() => {
      setValidCategory(category.path);
      window.history.pushState({ path: newUrl }, '', newUrl);
      setLoading(true);
      setTimeout(() => {
        router.push(newUrl, undefined, { shallow: true });
        setLoading(false);
        setInTransition(false);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    if (category) {
      const CategoryComponent = categoryComponents[category];
      if (CategoryComponent) {
        setValidCategory(category);
        setLoading(false);
        setInTransition(false);
      } else {
        router.replace('/404');
      }
    }
  }, [category]);

  const CategoryComponent = validCategory ? categoryComponents[validCategory] : null;

  return (
    <Layout
      handleDrawer={handleDrawer}
      isDrawerOpen={isDrawerOpen}
      closeDrawer={closeDrawer}
      activeCategory={validCategory}
      handleCategoryClick={handleCategoryClick}
      inTransition={inTransition}
      loading={loading}
    >
      <div className={inTransition ? 'fade-exit fade-exit-active' : 'fade-enter fade-enter-active'}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {CategoryComponent && <CategoryComponent />}
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
