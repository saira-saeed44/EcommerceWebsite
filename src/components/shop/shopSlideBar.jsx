import React, { useState } from "react";
import { FaColumns, FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsViewList } from "react-icons/bs";
import CustomInput from "../common/inputField/inputField";
const ShopSlideBar = ({
  searchQuery,
  setSearchQuery,
  results,
  gridView,
  totalResults,
  visibleProducts,
  products,
  toggleGridView,
  setFilteredProducts,
  handleProductsToShowChange,
  setSortOption, 
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const applyFilter = (inputValue) => {
    const filteredSuggestions = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    applyFilter(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    setShowSuggestions(false);
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption); 
  };

  return (
    <div className="bg-[#F9F1E7] py-2 px-2 md:px-6 lg:px-8">
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        <div className="flex items-center gap-x-8 md:gap-x-4">
          <div className="flex flex-col gap-2 relative w-full">
            <div className="flex items-center border border-gray-300 rounded w-full">
              <CustomInput
                placeholder="Search Product"
                className="pr-10 pl-3 py-3 w-auto"
                onChange={(e) => handleSearch(e.target.value)}
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
          <div className="md:flex md:items-center gap-2 md:pl-28">
            <label htmlFor="sort" className="text-lg flex flex-row">
              Sort by:
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded px-3 py-1"
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
            onChange={(e) => handleProductsToShowChange(e.target.value)}
          >
            {[4, 8, 12, 16, 20, 24, 28, 32].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <IoGrid onClick={() => toggleGridView("grid")} />
        <BsViewList onClick={() => toggleGridView("list")} />
          <FaColumns onClick={()=>toggleGridView("column")}/>
        <p className="text-black">
          Showing 1-{visibleProducts} results of {totalResults}
        </p>
      </div>
    </div>
  );
};

export default ShopSlideBar;







// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";
// import { BsViewList } from "react-icons/bs";
// import CustomInput from "../common/inputField/inputField";
// const ShopSlideBar = ({
//   searchQuery,
//   setSearchQuery,
//   results,
//   gridView,
//   totalResults,
//   visibleProducts,
//   products,
//   toggleGridView,
//   setFilteredProducts,
//   handleProductsToShowChange,
// }) => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [sortOption, setSortOption] = useState("default");
//   const applyFilter = (inputValue) => {
//     const filteredSuggestions = products.filter((product) =>
//       product.name.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setSuggestions(filteredSuggestions);
//     setFilteredProducts(filteredSuggestions);
//   };
//   const handleSearch = (value) => {
//     setSearchQuery(value);
//     applyFilter(value);
//     setShowSuggestions(value.length > 0);
//   };
//   const handleSuggestionClick = (product) => {
//     setSearchQuery(product.name);
//     applyFilter(product.name);
//     setShowSuggestions(false);
//   };
//   const handleSortChange = (e) => {
//     const selectedOption = e.target.value;
//     setSortOption(selectedOption);
//     let sortedProducts = [...products];
//     if (selectedOption === "ascending") {
//       sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (selectedOption === "descending") {
//       sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
//     }
//     setFilteredProducts(sortedProducts);
//   };
//   return (
//     <div className="bg-[#F9F1E7] py-2 px-2 md:px-6 lg:px-8">
//       <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
//         <div className="flex items-center gap-x-8 md:gap-x-4">
//           <div className="flex flex-col gap-2 relative w-full">
//             <div className="flex items-center border border-gray-300 rounded w-full">
//               <CustomInput
//                 placeholder="Search Product"
//                 className="pr-10 pl-3 py-3 w-auto"
//                 onChange={(e) => handleSearch(e.target.value)}
//                 value={searchQuery}
//               />
//               <FaSearch className="absolute right-6 text-gray-500" />
//             </div>
//             {showSuggestions && suggestions.length > 0 && (
//               <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded mt-1 w-full z-50 max-h-48 overflow-y-auto">
//                 {suggestions.map((product, index) => (
//                   <li
//                     key={index}
//                     className="p-2 hover:bg-gray-200 cursor-pointer"
//                     onClick={() => handleSuggestionClick(product)}
//                   >
//                     {product.name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <div className="md:flex md:items-center gap-2 md:pl-28">
//             <label htmlFor="sort" className="text-lg flex flex-row">
//               Sort by:
//             </label>
//             <select
//               id="sort"
//               className="border border-gray-300 rounded px-3 py-1"
//               value={sortOption}
//               onChange={handleSortChange}
//             >
//               <option value="default">Default</option>
//               <option value="ascending">Ascending</option>
//               <option value="descending">Descending</option>
//             </select>
//           </div>
//           <label htmlFor="productsToShow" className="text-lg">
//             Show:
//           </label>
//           <select
//             id="productsToShow"
//             className="border border-gray-300 rounded px-3 py-1"
//             onChange={(e) => handleProductsToShowChange(e.target.value)}
//           >
//             {[4, 8, 12, 16, 20, 24, 28, 32].map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>
//         </div>
//         <IoGrid
//           onClick={() => {
//             toggleGridView(true);
//           }}
//         />
//         <BsViewList
//           onClick={() => {
//             toggleGridView(false);
//           }}
//         />
//         <p className="text-black">
//           Showing 1-{visibleProducts} results of {totalResults}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ShopSlideBar;
