import React from "react";
import img from "../../assests/svg/image1.svg.svg";
import Button from "../common/button/button";
import { useNavigate } from "react-router";
const Hero = ({ hero }) => {
  const navigate = useNavigate();
  const handleCkick = (product) => {
    navigate("/shop");
  };
  return (
    <div
      className="relative font-poppins bg-cover bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute bg-[#FFF3E3] p-6 md:p-9 lg:p-12 max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl top-1/4 md:top-1/3  right-4 md:right-8 lg:right-12 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-[#333333] text-sm md:text-base font-semibold ">
          New Arrival
        </p>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-[#B88E2F] font-bold mb-4">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-[#333333] mb-5 md:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Button
          className="bg-[#B88E2F]  text-white px-6 md:px-8 py-2 md:py-3 font-medium text-sm md:text-base transition hover:scale-105  duration-300 hover:bg-[#a17a27]"
          label="Buy Now"
          onClick={(e) => {
            handleCkick();
          }}
        />
      </div>
    </div>
  );
};
export default Hero;
