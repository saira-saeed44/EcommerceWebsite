import React from "react";
import { CarouselDemo } from "../common/swipper";
import img from "../../assests/svg/gallery5.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import Button from "../common/button/button";
import CustomInput from "../common/inputField/inputField";
const InspirationSection = () => {
  return (
    <div className="container font-poppins bg-[#FCF8F3] mx-auto my-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-1/3 w-full px-4 lg:pl-8 lg:pt-24 text-left">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#3A3A3A]">
            50+ Beautiful Rooms <br /> Inspiration
          </h2>
          <p className="text-[#616161] my-4">
            Our designers have already created a lot of beautiful prototypes
            <br /> of rooms that will inspire you.
          </p>
          <Button
            className="bg-[#B88E2F] text-white py-2 px-6 mt-4 hover:bg-[#a17a27] transition duration-300"
            label="Explore More"
          />
        </div>
        <div className="lg:w-1/3 w-full relative pt-7">
          <img
            src={img}
            className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover transition-all duration-300"
            alt="Room Inspiration"
          />
          <div className="absolute bottom-5 left-1 bg-white w-[100px] md:w-[140px] lg:w-[160px] h-[80px] md:h-[110px] flex items-center justify-between p-2 md:p-3 shadow-lg">
            <div className="text-left">
              <div className="text-[9px] md:text-[10px] lg:text-[11px] font-medium text-[#616161]">
                01__Bed Room
              </div>
              <div className="text-[10px] md:text-[15px] lg:text-[19px] pt-2 font-semibold text-[#3A3A3A]">
                Inner Peace
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:left-[33%]">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="text-white text-[20px] md:text-[25px] px-2 py-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="lg:w-1/3 w-full pt-7 relative mt-0">
          <CarouselDemo />
          <div className="flex justify-center mt-4">
            {[...Array(5).keys()].map((index) => (
              <CustomInput
                key={index}
                type="radio"
                name="carousel"
                id={`slide-${index}`}
                className="form-radio h-3 w-3 mx-1 cursor-pointer border-yellow-300 text-[#B88E2F]"
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InspirationSection;
