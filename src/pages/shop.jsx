import React, { useState, useEffect } from "react";
import { data } from "../utills/data/home";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
import ProductGrid from "../components/home/productGrid";
import ShopSlideBar from "../components/shop/shopSlideBar";
import Layout from "../components/common/layout";
import ProductInline from "../components/home/productInline";
const Shop = () => {
  const storedQuery = localStorage.getItem("searchQuery") || "";
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [gridView, setGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState(storedQuery);
  const [filteredProducts, setFilteredProducts] = useState(data.products);
  // useEffect(() => {
  //   handleSearch(searchQuery);
  // }, [searchQuery]);
  const handleSearch = (query) => {
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
    const newFilteredProducts = data.products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  };
  const toggleGridView=
  (isgrid)=>{
    setGridView(isgrid)
  }
  return (
    <div>
      <Layout>
        <HeroBreadCrumbOne route={"Shop"} />
        <ShopSlideBar
          searchQuery={searchQuery}
          setSearchQuery={handleSearch}
          results={data.products.length}
          totalResults={filteredProducts.length}
          products={data.products}
          setFilteredProducts={setFilteredProducts}
          setVisibleProducts={setVisibleProducts}
          gridView={gridView}
          visibleProducts={visibleProducts}
          toggleGridView={toggleGridView}
        />
        {gridView ? (
          <ProductGrid products={filteredProducts.slice(0, visibleProducts)} />
        ) : (
          <ProductInline
            products={filteredProducts.slice(0, visibleProducts)}
          />
        )}
        
        <FeaturesSection />
      </Layout>
    </div>
  );
};
export default Shop;
