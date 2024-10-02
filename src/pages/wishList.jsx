import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/common/layout";
import ProductGrid from "../components/home/productGrid";
import ShopSlideBar from "../components/shop/shopSlideBar";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
const Shop = () => {
  const wishlist = useSelector((state) => state.product.wishlist);
  return (
    <Layout>
      <HeroBreadCrumbOne route={"wishList"} />
      <ShopSlideBar />
      <div>
        {wishlist.length === 0 ? (
          <p className="text-center text-xl font-semibold">Your WishList is empty</p>
        ) : (
          <ProductGrid products={wishlist} heading="Wishlist Products" />
        )}
      </div>
      <FeaturesSection />
    </Layout>
  );
};
export default Shop;
