import React from "react";
import Button from "../common/button/button";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../components/common/inputField/inputField";
import { useNavigate } from "react-router";
function Checkout() {
  const navigate = useNavigate();
  const handleCkick = (product) => {
    navigate("/");
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div className="bg-white p-6 md:ml-2 gap-5 flex flex-col items-center md:items-start">
        <h2 className="text-2xl font-semibold mb-4 pt-4 md:pt-16 text-center md:text-left">
          Billing Details
        </h2>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="firstName"
                    type="text"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.firstName && (
                <span className="text-red-600">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="lastName"
                    type="text"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.lastName && (
                <span className="text-red-600">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name (Optional)
            </label>
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => (
                <CustomInput
                  id="companyName"
                  type="text"
                  {...field}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Street Address
              </label>
              <Controller
                name="streetAddress"
                control={control}
                rules={{ required: "Street address is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="streetAddress"
                    type="text"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.streetAddress ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.streetAddress && (
                <span className="text-red-600">
                  {errors.streetAddress.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="townCity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Town / City
              </label>
              <Controller
                name="townCity"
                control={control}
                rules={{ required: "Town/City is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="townCity"
                    type="text"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.townCity ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.townCity && (
                <span className="text-red-600">{errors.townCity.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="province"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Province
              </label>
              <Controller
                name="province"
                control={control}
                rules={{ required: "Province is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="province"
                    type="text"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.province ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.province && (
                <span className="text-red-600">{errors.province.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ZIP Code
              </label>
              <Controller
                name="zipCode"
                control={control}
                rules={{ required: "ZIP code is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="zipCode"
                    type="text"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.zipCode ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.zipCode && (
                <span className="text-red-600">{errors.zipCode.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="phone"
                    type="tel"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.phone && (
                <span className="text-red-600">{errors.phone.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <CustomInput
                    id="email"
                    type="email"
                    {...field}
                    className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Information
            </label>
            <Controller
              name="additionalInfo"
              control={control}
              render={({ field }) => (
                <textarea
                  id="additionalInfo"
                  rows="3"
                  {...field}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>

          <div className="text-center mt-6">
            <Button
              type="submit"
              label="Place Order"
              className="text-[#000000] border border-[#000000] py-3 px-14 rounded-lg shadow-sm"
              onClick={(e) => {
                handleCkick();
              }}
            />
          </div>
        </form>
      </div>
      <div className="max-w-xl mx-auto mt-5 pt-10 md:mt-0">
        <div className="max-w-xl mx-auto px-4 pt-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Product</h2>
          <div className="flex justify-between border-b pb-4 mb-4">
            <div className="flex items-center">
              <span className="font-medium text-[#9F9F9F]">Asgaard sofa</span>
              <span className="ml-4 text-[#000000]">X 1</span>
            </div>
            <span className="font-medium">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between border-b pb-4 mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl">Total</span>
            <span className="text-xl font-semibold text-[#B88E2F]">
              Rs. 250,000.00
            </span>
          </div>

          <div className="mt-6">
            <h2 className="text-md pl-2 font-semibold text-[#000000]">
              Direct Bank Transfer
            </h2>
            <div className="mb-6 mt-2 space-y-2">
              <div className="flex items-center">
                <CustomInput
                  id="directBankTransfer"
                  type="radio"
                  name="paymentMethod"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="directBankTransfer"
                  className="ml-2 text-sm font-medium text-[#9F9F9F]"
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex items-center">
                <CustomInput
                  id="cashOnDelivery"
                  type="radio"
                  name="paymentMethod"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />

                <label
                  htmlFor="cashOnDelivery"
                  className="ml-2 text-sm font-medium text-[#9F9F9F]"
                >
                  Cash On Delivery
                </label>
              </div>
            </div>
            <div className="text-sm text-[#000000] pl-2">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </div>
            <div></div>
            <div className="text-center mt-6 pb-5">
              <Button
                type="submit"
                label="Place Order"
                className="text-[#000000] border border-[#000000] py-3 px-14 rounded-lg shadow-sm"
                onClick={(e) => {
                  handleCkick();
                }}
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Checkout;
