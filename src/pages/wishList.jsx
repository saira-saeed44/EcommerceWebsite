import React from "react";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
import { data } from "../utills/data/shop";
import Layout from "../components/common/layout";
import ProductGrid from "../components/home/productGrid";
import ShopSlideBar from "../components/shop/shopSlideBar";
const Shop = () => {
  return (
    <div>
      <Layout>
        <HeroBreadCrumbOne route={"wishList"} />
        <ProductGrid products={data.products} />
        <ShopSlideBar />
        <FeaturesSection />
      </Layout>
    </div>
  );
};
export default Shop;
