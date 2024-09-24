import React from "react";
import { useForm } from "react-hook-form";
import Button from "../common/button/button";
import CustomInput from "../common/inputField/inputField";
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <footer className="bg-white pt-12 pb-4 lg:px-8 mt-12 border-t">
      <div className="max-w-7xl mx-7 grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-black font-poppins text-2xl font-bold leading-9 text-left mb-4">
            Funiro.
          </h3>
          <p className="text-gray-500">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="pb-6">
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-black font-poppins text-lg font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-poppins text-lg font-medium"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-poppins text-lg font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-poppins text-lg font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-lg font-semibold text-gray-500 mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-black font-poppins text-lg font-medium"
              >
                Payment Options
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-poppins text-lg font-medium"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-poppins text-lg font-medium"
              >
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">
            Newsletter
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex md:flex-row flex-col mb-2  gap-x-4"
          >
            <CustomInput
              className="w-auto outline-none border-b-2"
              type="email"
              placeholder="enter your email address"
            />
            <Button
              type="submit"
              className="font-medium border-b-2 font-poppins pt-4 border-black md:pt-2 text-lg text-[#000000]  rounded-md  transition-colors"
              label="SUBSCRIBE"
            />
          </form>
        </div>
      </div>
      <hr className="my-6 border-t border-gray-200" />
      <div className="pl-6  text-[#000000]">
        &copy; 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
