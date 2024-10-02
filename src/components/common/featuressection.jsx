import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faShieldAlt,
  faTruck,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
const FeaturesSection = () => {
  return (
    <div className="bg-[#f9f4ef] py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-4 w-full md:w-auto">
          <FontAwesomeIcon icon={faTrophy} className="text-4xl text-black" />
          <div className="text-center md:text-left">
            <h3 className="text-black font-semibold">High Quality</h3>
            <p className="text-sm text-gray-600">crafted from top materials</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-4 w-full md:w-auto">
          <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-black" />
          <div className="text-center md:text-left">
            <h3 className="text-black font-semibold">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-4 w-full md:w-auto">
          <FontAwesomeIcon icon={faTruck} className="text-4xl text-black" />
          <div className="text-center md:text-left">
            <h3 className="text-black font-semibold">Free Shipping</h3>
            <p className="text-sm text-gray-600">Order over 150$</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-4 w-full md:w-auto">
          <FontAwesomeIcon icon={faHeadset} className="text-4xl text-black" />
          <div className="text-center md:text-left">
            <h3 className="text-black font-semibold">24 / 7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturesSection;
