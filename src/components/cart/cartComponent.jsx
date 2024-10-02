import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "../common/button/button";
const Cart = ({ cartItems, setCartItems, setIsOpenCart }) => {
  const navigate = useNavigate();
  const handleDeleteItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const subtotal = calculateSubtotal();
  return (
    <div className="fixed right-0 top-0 h-screen w-full md:w-[30%] bg-white shadow-lg p-6 flex flex-col justify-between overflow-y-auto z-50">
      <h2 className="text-3xl font-medium mb-4">
        Shopping Cart
        <FontAwesomeIcon
          icon={faDeleteLeft}
          className="pl-12 md:pl-20 cursor-pointer"
          onClick={() => setIsOpenCart(false)}
        />
      </h2>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-3 rounded relative w-full max-w-sm text-center shadow-lg">
            <strong className="font-semibold">Your cart is empty!</strong>
            <span className="block mt-1 text-sm">
              Add items to your cart to start shopping.
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-6 flex-1">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4 space-y-2 md:space-y-0 flex-row py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover mr-4"
              />
              <div className="flex-1 px-4">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
              <p className="text-[#B88E2F] font-bold">
                Rs. {item.price.toLocaleString()}
              </p>
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer text-red-500 ml-2"
                onClick={() => handleDeleteItem(index)}
              />
            </div>
          ))}
        </div>
      )}
      <div className="text-right mt-6">
        <p className="text-xl font-semibold text-[#B88E2F]">
          Subtotal: Rs. {subtotal.toLocaleString()}
        </p>
        <div className="mt-4 flex flex-col lg:flex-row justify-center md:justify-between">
          <Button
            className="w-full md:w-[118px] h-[30px] py-1 rounded-full border border-black text-[#000000] hover:bg-[#B88E2F] hover:text-white transition duration-300 mb-2"
            label="Cart"
            onClick={() => navigate("/cart")}
          />
          <Button
            className="w-full md:w-[118px] h-[30px] py-1 rounded-full border border-black text-[#000000] hover:bg-[#B88E2F] hover:text-white transition duration-300 mb-2"
            label="Checkout"
            onClick={() => navigate("/checkout")}
          />
          <Button
            className="w-full md:w-[118px] h-[30px] py-1 rounded-full border border-black text-[#000000] hover:bg-[#B88E2F] hover:text-white transition duration-300"
            label="Compare"
            onClick={() => navigate("/compare")}
          />
        </div>
      </div>
    </div>
  );
};
export default Cart;
