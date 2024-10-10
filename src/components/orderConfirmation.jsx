import React from "react";
import { useLocation } from "react-router-dom";


const OrderConfirmation = () => {
  const location = useLocation();
  const { orderData } = location.state || {};
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Order Confirmation</h2>
      {orderData ? (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Thank you for your order!</h3>
            <h4 className="text-lg font-semibold mb-2">Order Details:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><strong>Name:</strong> {orderData.firstName} {orderData.lastName}</p>
              <p><strong>Email:</strong> {orderData.email}</p>
              <p><strong>Phone:</strong> {orderData.phone}</p>
              <p><strong>Street Address:</strong> {orderData.streetAddress}</p>
              <p><strong>Bank Name:</strong> {orderData.bankName}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-4">Products Ordered:</h4>
            <div className="space-y-2">
              {orderData.cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                  <span className="font-medium">{item.name} (X{item.quantity})</span>
                  <span className="font-semibold text-gray-700">Rs. {item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Total Amount:</h4>
            <p className="text-xl font-bold text-gray-800">Rs. {orderData.subtotal}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No order data available.</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
