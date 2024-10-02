import React from "react";
const ProductNavBar = () => {
  return (
    <div className="bg-[#F9F1E7] py-6 mt-16 px-4 md:px-6 lg:px-8">
      <ul className="flex flex-wrap items-center gap-2 text-sm md:gap-4">
        <li className="text-[#9F9F9F] hover:text-[#000000] transition duration-300">
          Home {">"}
        </li>
        <li className="text-[#9F9F9F] hover:text-[#000000] transition duration-300">
          Shop {">"}
        </li>
        <li className="text-[#9F9F9F]">{" | "}</li>
        <li className="text-[#000000] font-semibold">Asgaard Sofa</li>
      </ul>
    </div>
  );
};
export default ProductNavBar;
