import React from "react";
import { FaFilter, FaVectorSquare } from "react-icons/fa";
const ShopSlideBar = () => {
  return (
    <div className="bg-[#F9F1E7] py-6 px-4 md:px-6 lg:px-8">
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        <div className="flex items-center gap-x-8 md:gap-x-4">
        <div className="flex items-center gap-2">
          <FaFilter className="text-lg" />
          <p className="text-lg font-medium">Filter</p>
        </div>
        <div className="flex items-center gap-2 pl-10">
          <FaVectorSquare className="text-lg" />
          <p className="text-sm text-[#000000]">Showing 1–16 of 32 results</p>
        </div>
        </div>
       <div className="flex items-center gap-x-8 md:gap-x-4">
       <div className="flex items-center gap-2">
          <label className="text-sm">Show:</label>
          <select className="border px-2 py-2">
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>

          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Sort by:</label>
          <select className="border bg-[#FFFFFF] px-2 py-2">
            <option value="default">Default</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>

          </select>
        </div>
       </div>
      </div>
    </div>
  );
};
export default ShopSlideBar;
