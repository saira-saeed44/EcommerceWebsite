import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsViewList } from "react-icons/bs";
import CustomInput from "../common/inputField/inputField";
import ProductGrid from "../home/productGrid";
import ProductInline from "../home/productInline";
const ShopSlideBar = ({
  searchQuery = "",
  setSearchQuery,
  results,
  gridView,
  totalResults,
  visibleProducts,
  products,
  toggleGridView,
  setFilteredProducts,
  setVisibleProducts,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [productsToShow, setProductsToShow] = useState(4);
  const applyFilter = (inputValue) => {
    // first filter products according to name
    const filteredSuggestions = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    const sortedSuggestions = filteredSuggestions.sort((a, b) => {
      if (a.name.toLowerCase() === inputValue.toLowerCase()) return -1;
      if (b.name.toLowerCase() === inputValue.toLowerCase()) return 1;
      return 0;
    });
    setSuggestions(sortedSuggestions);
    setFilteredProducts(filteredSuggestions || []);
  };
  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value) setShowSuggestions(true);
    else setShowSuggestions(false);
    applyFilter(value);
  };
  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    setShowSuggestions(false);
    applyFilter(product.name);
  };
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    let sortedProducts = [...products];
    if (selectedOption === "ascending") {
      sortedProducts = sortedProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (selectedOption === "descending") {
      sortedProducts = sortedProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    setFilteredProducts(sortedProducts);
  };
  const handleProductsToShowChange = (e) => {
    const selectedValue = e.target.value;
    setProductsToShow(selectedValue);
    setVisibleProducts(selectedValue);
  };
  return (
    <div className="bg-[#F9F1E7] py-2 px-2 md:px-6 lg:px-8 ">
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        <div className="flex items-center gap-x-8 md:gap-x-4">
          <div className="flex flex-col gap-2 relative w-full">
            <div className="flex items-center border border-gray-300 rounded w-full">
              <CustomInput
                placeholder="Search Product"
                className="pr-10 pl-3 py-3 w-auto"
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setShowSuggestions(suggestions.length > 0)}
                value={searchQuery}
              />
              <FaSearch className="absolute right-6 text-gray-500" />
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded mt-1 w-full z-50 max-h-48 overflow-y-auto">
                {suggestions.map((product, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(product)}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="md:flex md:items-center gap-2  md:pl-28">
            <label htmlFor="sort" className="text-lg flex flex-row">
              Sortby:
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded px-3 py-1"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          <label htmlFor="productsToShow" className="text-lg">
            Show:
          </label>
          <select
            id="productsToShow"
            className="border border-gray-300 rounded px-3 py-1"
            value={productsToShow}
            onChange={handleProductsToShowChange}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={20}>20</option>
            <option value={24}>24</option>
            <option value={28}>28</option>
            <option value={32}>32</option>
          </select>
        </div>
        <IoGrid
          onClick={() => {
            toggleGridView(true);
          }}
        />
        <BsViewList
          onClick={() => {
            toggleGridView(false);
          }}
        />
        <p className=" text-black">
          Showing 1-{visibleProducts} results of {totalResults}
        </p>
      </div>
    </div>
  );
};
export default ShopSlideBar;
