import img1 from "../../assests/svg/Asgaard sofa 5.svg";
import React from "react";
import Button from "../common/button/button";
import { useNavigate } from "react-router";
const ProductComparison = () => {
  const navigate = useNavigate();
  const handleCkick = (productId) => {
    navigate(`/shop/${productId}`);
  };
  const handlecartCkick = (product) => {
    navigate(`/cart`);
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg md:text-2xl mb-2">
            Go to Product <br /> page for more <br /> Products.
          </h4>
          <Button
            label="View More"
            className="underline font-bold text-[#727272] md:text-lg"
            onClick={() => navigate("/products")}
          />
        </div>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <div className="text-center">
            <img
              src={img1}
              alt="Asgaard Sofa"
              className="w-36 h-32 mx-auto object-cover rounded-lg"
            />
            <h2 className="font-semibold mt-4">Asgaard Sofa</h2>
            <p className="text-lg font-bold">Rs. 250,000.00</p>
            <p className="text-sm text-yellow-500">★★★★☆ (4.7)</p>
            <p className="text-sm text-gray-500">204 Reviews</p>
          </div>
          <div className="text-center">
            <img
              src={img1}
              alt="Outdoor Sofa Set"
              className="w-36 h-32 mx-auto object-cover rounded-lg"
            />
            <h2 className="font-semibold mt-4">Outdoor Sofa Set</h2>
            <p className="text-lg font-bold">Rs. 224,000.00</p>
            <p className="text-sm text-yellow-500">★★★★☆ (4.2)</p>
            <p className="text-sm text-gray-500">145 Reviews</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4 md:mt-0">
          <Button
            onClick={(e) => handleCkick()}
            className="bg-[#B88E2F] text-white px-4 py-2  hover:bg-yellow-600 transition"
            label="Add A Product"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-[#000] font-semibold text-sm">
                Features
              </th>
              <th className="px-6 py-3 text-[#000] font-semibold text-sm">
                Asgaard Sofa
              </th>
              <th className="px-6 py-3 text-[#000] font-semibold text-sm">
                Outdoor Sofa Set
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-gray-700">Sales Package</td>
              <td className="px-6 py-4 text-gray-900">1 sectional sofa</td>
              <td className="px-6 py-4 text-gray-900">
                1 Three Seater, 2 Single Seater
              </td> 
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-700">Model Number</td>
              <td className="px-6 py-4 text-gray-900">TFCBLIGRBL6SRHS</td>
              <td className="px-6 py-4 text-gray-900">DTUBLIGRBL568</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-700">Secondary Material</td>
              <td className="px-6 py-4 text-gray-900">Solid Wood</td>
              <td className="px-6 py-4 text-gray-900">Solid Wood</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-700">Configuration</td>
              <td className="px-6 py-4 text-gray-900">L-shaped</td>
              <td className="px-6 py-4 text-gray-900">L-shaped</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-700">Upholstery Material</td>
              <td className="px-6 py-4 text-gray-900">Fabric + Cotton</td>
              <td className="px-6 py-4 text-gray-900">Fabric + Cotton</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-700">Dimensions</td>
              <td className="px-6 py-4 text-gray-900">
                Width: 265.32 cm, Height: 76 cm, Depth: 167.76 cm
              </td>
              <td className="px-6 py-4 text-gray-900">
                Width: 265.32 cm, Height: 76 cm, Depth: 167.76 cm
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-700">Warranty</td>
              <td className="px-6 py-4 text-gray-900">
                1 Year Manufacturing Warranty
              </td>
              <td className="px-6 py-4 text-gray-900">
                1.2 Year Manufacturing Warranty
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
        <Button
          onClick={(e) => handlecartCkick()}
          className="bg-[#B88E2F] text-white py-2  transition w-full md:w-auto px-8"
          label="Add To Cart"
        />
        <Button
          onClick={(e) => handlecartCkick()}
          className="bg-[#B88E2F] text-white py-2   transition w-full md:w-auto px-8"
          label="Add To Cart"
        />
      </div>
    </div>
  );
};
export default ProductComparison;
