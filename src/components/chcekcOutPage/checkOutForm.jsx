import React from "react";
import Button from "../common/button/button";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../components/common/inputField/inputField";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="grid grid-cols-1 gap-8 p-4">
      <div className="bg-white p-6 md:ml-2 gap-5 flex flex-col  md:items-start">
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
                  {...field}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Bank Transfer Information
            </h3>
            <label
              htmlFor="bankName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Bank Name
            </label>
            <Controller
              name="bankName"
              control={control}
              rules={{ required: "Bank name is required" }}
              render={({ field }) => (
                <CustomInput
                  id="bankName"
                  type="text"
                  {...field}
                  className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.bankName ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.bankName && (
              <span className="text-red-600">{errors.bankName.message}</span>
            )}

            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-700 mb-1 mt-4"
            >
              Account Number
            </label>
            <Controller
              name="accountNumber"
              control={control}
              rules={{ required: "Account number is required" }}
              render={({ field }) => (
                <CustomInput
                  id="accountNumber"
                  type="text"
                  {...field}
                  className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.accountNumber ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.accountNumber && (
              <span className="text-red-600">
                {errors.accountNumber.message}
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <Button
              type="button"
              onClick={handleClick}
              className="mt-2 md:mt-0"
            >
              Return to Cart
            </Button>
            <Button type="submit" onClick={handleClick} className="mt-2 md:mt-0">
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
