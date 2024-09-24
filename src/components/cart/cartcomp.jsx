import React from "react";
import CustomInput from "../common/inputField/inputField";
import img from '../../assests/svg/Asgaard sofa 5.svg';
import Button from "../common/button/button";
function Cart() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <a
            href="#"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={img}
              alt="Product"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Asgaard Sofa</h2>
            <p className="text-gray-600 mb-4">Choose your preferred option:</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="sofa-size" className="mr-2" />
                <span>Small (Rs. 200,000)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="sofa-size" className="mr-2" />
                <span>Medium (Rs. 250,000)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="sofa-size" className="mr-2" />
                <span>Large (Rs. 300,000)</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Additional Information
            </h3>
            <label className="block mb-2">
              <span className="text-gray-700">Enter a Coupon Code</span>
              <CustomInput
              type="text"
              placeholder="Coupon code"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
             
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Phone Number</span>
              <CustomInput 
              type="text"
              placeholder="Enter phone number"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Cart Totals</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Product</span>
              <span>Asgaard Sofa</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Quantity</span>
              <span>1</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>
          </div>
          <Button  label="Check Out" className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        
           
       
        </div>
      </div>
    </div>
  );
}

export default Cart;
