import React from "react";
import { useLocation } from "react-router-dom"; 
const OrderConfirmation = () => {
  const { state } = useLocation();
  const { orderData } = state || {}; 
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Order Confirmation</h2>
      {orderData ? (
        <div>
          <h3 className="text-xl mb-2">Thank you for your order!</h3>
          <h4 className="font-semibold">Order Details:</h4>
          <div className="mb-2">
            <p><strong>Name:</strong> {orderData.firstName} {orderData.lastName}</p>
            <p><strong>Email:</strong> {orderData.email}</p>
            <p><strong>Phone:</strong> {orderData.phone}</p>
            <p><strong>Street Address:</strong> {orderData.streetAddress}</p>
            <p><strong>Bank Name:</strong> {orderData.bankName}</p>
          </div>
          <h4 className="font-semibold">Products Ordered:</h4>
          {orderData.cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} (X{item.quantity})</span>
              <span>Rs. {item.price * item.quantity}</span>
            </div>
          ))}
          <h4 className="font-semibold">Total Amount:</h4>
          <p>Rs. {orderData.subtotal}</p>
        </div>
      ) : (
        <p>No order data available.</p>
      )}
    </div>
  );
};
export default OrderConfirmation;
