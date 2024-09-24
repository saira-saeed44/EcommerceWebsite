import React from "react";
import img from "../../assests/images/Rectangle 1 (1).png";
import img1 from "../../assests/svg/headerlogo.svg";
const HeroBreadCrumbOne = ({ route }) => {
  console.log("route==========", { route });
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <img src={img} alt="Shop Header" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 md:px-8">
        <img src={img1} alt="headerlogo" />
        <h1 className="text-black text-3xl md:text-4xl font-semibold text-center">
          {route}
        </h1>
        <nav className="mt-4">
          <ol className="list-reset flex flex-wrap justify-center text-black text-xs md:text-sm">
            <li>
              <a href="/" className="hover:underline font-semibold">
                Home
              </a>
            </li>
            <li>
              <span className="mx-2">{">"}</span>
            </li>
            <li>
              <span>{route}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};
export default HeroBreadCrumbOne;
