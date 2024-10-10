import React, { useState, useEffect } from "react";
import { data } from "../utills/data/home";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
import ProductGrid from "../components/home/productGrid";
import ProductInline from "../components/home/productInline";
import ShopSlideBar from "../components/shop/shopSlideBar";
import ProductCol from "../components/home/productTwoCol";
import Layout from "../components/common/layout";
const Shop = () => {
  const storedQuery = localStorage.getItem  ("searchQuery") || "";
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [gridView, setGridView] = useState("grid");
  const [searchQuery, setSearchQuery] = useState(storedQuery);
  const [filteredProducts, setFilteredProducts] = useState(data.products);
  const [productsToShow, setProductsToShow] = useState(4);
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
    let newFilteredProducts = data.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (sortOption === "ascending") {
      newFilteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "descending") {
      newFilteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredProducts(newFilteredProducts);
    setVisibleProducts((prev) => Math.min(prev, newFilteredProducts.length));
  }, [searchQuery, sortOption]);
  const toggleGridView = (isGrid) => {
    setGridView(isGrid);
  };
  const handleProductsToShowChange = (selectedValue) => {
    const newVisibleProducts = parseInt(selectedValue, 10);
    setProductsToShow(newVisibleProducts);
    setVisibleProducts(newVisibleProducts);
  };
  const handleShowMore = () => {
    setVisibleProducts((prevVisible) =>
      Math.min(prevVisible + productsToShow, filteredProducts.length)
    );
  };
  return (
    <div>
      <Layout>
        <HeroBreadCrumbOne route={"Shop"} />
        <ShopSlideBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          results={data.products.length}
          totalResults={filteredProducts.length}
          products={data.products}
          visibleProducts={visibleProducts}
          gridView={gridView}
          toggleGridView={toggleGridView}
          handleProductsToShowChange={handleProductsToShowChange}
          setSortOption={setSortOption}
        />
        {gridView === "grid" ? (
          <ProductGrid
            products={filteredProducts.slice(0, visibleProducts)}
            handleShowMore={handleShowMore}
          />
        ) : gridView === "list" ? (
          <ProductInline
            products={filteredProducts.slice(0, visibleProducts)}
            handleShowMore={handleShowMore}
          />
        ) : gridView === "column" ? (
          <ProductCol
            products={filteredProducts.slice(0, visibleProducts)}
            handleShowMore={handleShowMore}
          />
        ) : (
          <></>
        )}
        <FeaturesSection />
      </Layout>
    </div>
  );
};
export default Shop;













// import React, { useState } from "react";
// import { data } from "../utills/data/home";
// import FeaturesSection from "../components/common/featuressection";
// import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
// import ProductGrid from "../components/home/productGrid";
// import ShopSlideBar from "../components/shop/shopSlideBar";
// import Layout from "../components/common/layout";
// const Shop = () => {
//   const storedQuery = localStorage.getItem("searchQuery") || "";
//   const [visibleProducts, setVisibleProducts] = useState(4);
//   const [gridView, setGridView] = useState(true);
//   const [searchQuery, setSearchQuery] = useState(storedQuery);
//   const [filteredProducts, setFilteredProducts] = useState(data.products);
//   const [productsToShow, setProductsToShow] = useState(4);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     localStorage.setItem("searchQuery", query);
//     const newFilteredProducts = data.products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(newFilteredProducts);
//   };

//   const toggleGridView = (isGrid) => {
//     setGridView(isGrid);
//   };

//   const handleProductsToShowChange = (selectedValue) => {
//     const newVisibleProducts = parseInt(selectedValue, 10);
//     setProductsToShow(newVisibleProducts);
//     setVisibleProducts(newVisibleProducts);
//   };

//   const handleShowMore = () => {
//     setVisibleProducts((prevVisible) =>
//       Math.min(prevVisible + productsToShow, filteredProducts.length)
//     );
//   };

//   return (
//     <div>
//       <Layout>
//         <HeroBreadCrumbOne route={"Shop"} />
//         <ShopSlideBar
//           searchQuery={searchQuery}
//           setSearchQuery={handleSearch}
//           results={data.products.length}
//           totalResults={filteredProducts.length}
//           products={data.products}
//           setFilteredProducts={setFilteredProducts}
//           visibleProducts={visibleProducts}
//           gridView={gridView}
//           toggleGridView={toggleGridView}
//           handleProductsToShowChange={handleProductsToShowChange}
//         />
//         <ProductGrid
//           products={filteredProducts.slice(0, visibleProducts)}
//           gridView={gridView}
//           handleShowMore={handleShowMore}
//         />
//         <FeaturesSection />
//       </Layout>
//     </div>
//   );
// };

// export default Shop;
