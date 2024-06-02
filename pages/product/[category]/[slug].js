import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { products } from "@/data/data";
import Image from "next/image";
import Header from "@/components/shared/header/Header";
import Drawer from "@/components/shared/header/Drawer";
import OrderPage from "@/components/shop/OrderPage";
import Footer from "@/components/shared/footer/Footer";

const ProductPage = () => {
  const router = useRouter();
  const { category, slug } = router.query;
  const [product, setProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (category && slug) {
      console.log("Category:", category);
      console.log("Slug:", slug);

      // Generate the slug for comparison
      const generateSlug = (category, name) =>
        `${category}/${name
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/&/g, "and")
          .replace(/[^a-z0-9-]/g, "")}`;

      // Log all generated slugs for comparison
      products.forEach((prod) => {
        console.log("Generated Slug:", generateSlug(prod.category, prod.name));
      });

      const foundProduct = products.find(
        (prod) =>
          generateSlug(prod.category, prod.name) === `${category}/${slug}`
      );

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.log("Product not found with slug:", `${category}/${slug}`);
      }
    }
  }, [category, slug]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className={`drawer-slider ${isDrawerOpen ? "drawer--open" : ""}`}>
        <div className="drawer">
          <Drawer closeDrawer={closeDrawer} />
        </div>
      </div>
      <Header handleDrawer={handleDrawer} />
      <OrderPage product={product} />
      <Footer />
    </>
  );
};

export default ProductPage;
