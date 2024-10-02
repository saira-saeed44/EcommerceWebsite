import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/button/button";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../components/redux/features/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 
const CartList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cartItems = useSelector((state) => state.product.cart);
  const [address, setAddress] = useState("Main Street, Hayyat Abad");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } }); 
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price);
      const quantity = Number(item.quantity);
      return total + price * quantity;
    }, 0);
  };
  const subtotal = calculateSubtotal();
  const handleAddressChange = () => {
    if (newAddress) {
      setAddress(newAddress);
      setIsAddressModalOpen(false); 
    }
  };
  return (
    <div className="flex flex-col md:flex-col md:text-center lg:flex-row px-4 md:px-8 lg:px-12 gap-4">
      <div className="p-4 w-full">
        {cartItems.length === 0 ? (
          <p className="text-2xl text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 md:gap-12 lg:gap-24 pl-3 md:pl-6 justify-between border-b py-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: {item.price} PKR</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="border rounded px-2"
                  >
                    -
                  </button>
                  <p className="text-black mx-2">{item.quantity}</p>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="border rounded px-2"
                  >
                    +
                  </button>
                  <FontAwesomeIcon
                    onClick={() => handleRemove(item.id)}
                    icon={faTrash}
                    className="text-yellow-600 cursor-pointer ml-4"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-6 px-4 md:px-8 bg-[#F9F1E7] pb-3 mb-5 text-center w-full md:w-1/3 lg:w-1/4">
        <h2 className="text-[#000000] pb-8 px-4 md:px-9 text-[2xl] md:text-[4xl] mb-3 pt-7 font-semibold">
          Cart Totals
        </h2>
        <div>
          <span className="text-blue-500 hover:underline text-xs font-bold cursor-pointer" onClick={() => setIsAddressModalOpen(true)}>
            {address}
          </span>
        </div>
        <div className="px-7">
          <p className="text-xl pb-5 text-[#9F9F9F]">
            Subtotal: Rs. {subtotal.toLocaleString()}
          </p>
          <p className="text-xl text-[#B88E2F]">
            Total: Rs. {subtotal.toLocaleString()}
          </p>
          <Button 
            label="CheckOut" 
            className="border py-2 my-6 border-black text-center px-7 rounded" 
            onClick={handleCheckout} 
          />
        </div>
      </div>
      {isAddressModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-[90%] max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Change  Address</h2>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="border p-2 w-full rounded mb-4"
              placeholder="Enter new address"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsAddressModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddressChange}
                className="px-4 py-2 bg-yellow-600 text-white rounded"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartList;
