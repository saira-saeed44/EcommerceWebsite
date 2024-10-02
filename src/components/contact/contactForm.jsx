import React from "react";
import Button from "../common/button/button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomInput from "../common/button/button";
import { FaAddressBook, FaPhone, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router";
const   ContactForm = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    subject: yup.string().required("Subject is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });
  const {
    control,
     handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
  };
  // const handleCkick = (product) => {
  //   navigate("/");
  // };
  return (
    <div className="px-4 lg:px-8">
      <h2 className="text-3xl font-semibold text-center pt-8">
        Get In Touch With Us
      </h2>
      <p className="text-gray-600 text-center max-w-xl mx-auto px-4">
        For more information about our product & services, please feel free to
        drop us an email.
      </p>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-start my-8 max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="flex items-start space-x-2 pt-8 md:p-auto">
            <FaAddressBook   className="text-2xl" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-black">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <FaPhone className="text-2xl" />
            <div>
              <p className="text-black mt-2">
                <strong>Phone:</strong>
                <br />
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <FaClock className="text-2xl" />
            <div>
              <p className="text-black mt-2">
                <strong>Working Time:</strong>
                <br />
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-2">
              <label
                htmlFor="firstname"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                First Name
              </label>
              <Controller
                name="firstname"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    type="text"
                    placeholder="Enter your first name"
                    {...field}
                    className="w-full px-2 py-6 border border-gray-300 rounded-lg"
                  />
                )}
              />
              {errors.firstname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstname.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="lastname"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Last Name
              </label>
              <Controller
                name="lastname"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    type="text"
                    placeholder="Enter your last name"
                    {...field}
                    className="w-full px-2 py-6 border border-gray-300 rounded-lg"
                  />
                )}
              />
              {errors.lastname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastname.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Subject
              </label>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    type="text"
                    placeholder="Enter the subject"
                    {...field}
                    className="w-full px-2 py-6 border border-gray-300 rounded-lg"
                  />
                )}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    className="w-full px-2 py-6 border border-gray-300 rounded-lg"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>
            <div className="text-center lg:text-left">
              <Button
                type="submit"
                label="Submit"
                className="py-3 px-11 bg-[#B88E2F] text-white font-semibold rounded  hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
