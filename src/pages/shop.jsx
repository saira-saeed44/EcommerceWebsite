import React from "react";  
import { data } from "../utills/data/shop";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
import ProductGrid from "../components/home/productGrid";
import ShopSlideBar from "../components/shop/shopSlideBar";
import Layout from "../components/common/layout";
const Shop = () => {
  return (
    <div>
      <Layout>
      <HeroBreadCrumbOne route={"Shop"} />
      <ShopSlideBar/>
      <ProductGrid  products={data.products}/>
      <FeaturesSection />
      </Layout>
    </div>
  );
};
export default Shop;
