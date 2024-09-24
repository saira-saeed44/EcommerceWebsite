import React from "react";
import CustomInput from "../common/inputField/inputField";
import Button from "../common/button/button";
import { FaTrashAlt } from "react-icons/fa"; 
import imgSrc from "../../assests/svg/Asgaard sofa 5.svg";

function CartComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="text-black pb-4 mb-4">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center py-4 pl-2 bg-[#F9F1E7] mb-2">
              <h3 className="text-lg font-medium">Product</h3>
              <h3 className="text-lg font-medium hidden md:block">Price</h3>
              <h3 className="text-lg font-medium">Quantity</h3>
              <h3 className="text-lg font-medium">Subtotal</h3>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center py-4">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={imgSrc}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-[#9F9F9F] font-medium">Asgaard Sofa</p>
              </div>

              <div className="hidden md:block">
                <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
              </div>

              <div>
                <CustomInput
                  type="number"
                  defaultValue="1"
                  className="w-12 h-8 border border-[#9F9F9F] rounded-md py-1 px-2 text-center"
                />
              </div>

              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <p className="text-black font-medium mb-2 md:mb-0">Rs. 250,000.00</p>
                <button className="text-[#B88E2F] hover:text-red-600 transition duration-300">
                  <FaTrashAlt className="mx-auto md:ml-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-6 bg-[#F9F1E7] lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-center py-4">Cart Totals</h2>
          <div className="p-4">
            <div className="flex justify-between pb-2 mb-2">
              <p className="text-[#000000]">Subtotal</p>
              <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between font-bold text-black text-lg">
              <p>Total</p>
              <p className="text-[#B88E2F]">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                className="mt-6 w-[222px] h-[58.95px] border border-black  opacity-100 transition duration-300 hover:bg-black hover:text-white"
                label="Check Out"
              />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
