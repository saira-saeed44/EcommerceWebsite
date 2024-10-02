import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/features/productSlice";
import Button from "../common/button/button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.product.cart);
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup.string().required("Phone number is required"),
    streetAddress: yup.string().required("Street address is required"),
    bankName: yup.string().required("Bank name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price);
      const quantity = Number(item.quantity);
      return total + price * quantity;
    }, 0);
  };
  const subtotal = calculateSubtotal();
  const handlePlaceOrder = (data) => {
    cartItems.forEach((item) => {
      dispatch(removeFromCart({ id: item.id }));
    });
    navigate("/order-confirmation", {
      state: { orderData: { ...data, cartItems, subtotal } },
    });
  };
  return (
    <div className="flex flex-col lg:flex-row px-4">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
        <form onSubmit={handleSubmit(handlePlaceOrder)}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="firstName">
              First Name
            </label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="firstName"
                  {...field}
                  className={`border p-2 w-full ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="lastName">
              Last Name
            </label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="lastName"
                  {...field}
                  className={`border p-2 w-full ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="phone">
              Phone Number
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="phone"
                  {...field}
                  className={`border p-2 w-full ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="address">
              Street Address
            </label>
            <Controller
              name="streetAddress"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="address"
                  {...field}
                  className={`border p-2 w-full ${
                    errors.streetAddress ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-xs mt-1">
                {errors.streetAddress.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="bankName">
              Bank Name
            </label>
            <Controller
              name="bankName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="bankName"
                  {...field}
                  className={`border p-2 w-full ${
                    errors.bankName ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.bankName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.bankName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="email"
                  id="email"
                  {...field}
                  className={`border p-2 w-full ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>{" "}
          <Button
            label="Place Order"
            className="border py-2 border-black text-center px-7 rounded"
            type="submit"
          />
        </form>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="mx-auto mt-5 pt-10 md:mt-0">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center">
                  <span className="font-medium text-[#9F9F9F]">
                    {item.name}
                  </span>
                  <img src={item.img}/>
                  <span className="ml-4 text-black">X {item.quantity}</span>
                </div>
                <span className="font-medium">
                  Rs. {item.price * item.quantity}
                </span>
              </div>
            ))}
            <div className="flex justify-between border-b pb-4 mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">Rs. {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">Total</span>
              <span className="text-xl font-semibold text-[#B88E2F]">
                Rs. {subtotal}
              </span>
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
};
export default Checkout;
