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
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-3 rounded relative w-full max-w-sm text-center shadow-md">
            <strong className="font-bold">Your Cart is Empty!</strong>
          </div>
          <Button
            text={"Continue Shopping"}
            onClick={() => navigate("/shop")}
          />
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                className="text-red-600 cursor-pointer"
                onClick={() => handleDeleteItem(index)}
              />
            </div>
          ))}
          <div className="mt-4">
            <h4 className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</h4>
            <Button text={"Checkout"} onClick={() => navigate("/checkout")} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
