import React from "react";
import { data } from "../../utills/data/home";
const Browserrange = ({ categories }) => {
  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl text-[#333333] mb-2 font-bold">
        Browse The Range
      </h2>
      <p className="text-center text-base md:text-lg text-[#666666] mb-8">
        Lorem ipsum sit amet consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img
              src={category.image}
              alt={category.name}
              className="mx-auto w-[762.61px] h-[508px] object-cover opacity-100"
            />
            <p className="mt-4 text-sm md:text-lg font-semibold text-[#333333]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Browserrange;
