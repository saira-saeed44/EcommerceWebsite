import React from "react";
import img1 from "../../assests/svg/blog1.svg";
import img2 from "../../assests/svg/blog2.svg";
import img3 from "../../assests/svg/blog3.svg";
import recentImg1 from "../../assests/svg/blogminiimage (2).svg";
import recentImg2 from "../../assests/svg/blogminiimage.svg";
import recentImg3 from "../../assests/svg/blogminiimage (4).svg";
import recentImg4 from "../../assests/svg/blogminiimage (5).svg";
import recentImg5 from "../../assests/svg/blogminiimage (6).svg";
import CustomInput from "../common/inputField/inputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faCalendarCheck, faHandPaper } from "@fortawesome/free-regular-svg-icons";
import Button from "../common/button/button";
function Blog() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <div className="lg:hidden px-4 mb-8">
        <CustomInput
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="w-full lg:w-2/3">
          <section>
            <div className="max-w-full lg:max-w-2xl ml-4 lg:ml-0 pt-8 lg:pt-14">
              <div>
                <img
                  className="w-full h-44 md:h-64 lg:h-72 object-cover rounded-md"
                  src={img1}
                  alt="Blog 1"
                />
                <div className="flex flex-row gap-4 mt-2 text-sm text-gray-700 items-center">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faContactCard} />
                    <h2 className="font-semibold">Admin</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <h2 className="font-semibold">14 Oct 2022</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faHandPaper} />
                    <h2 className="font-semibold">Handmade</h2>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mt-4">Going all-in with millennial design</h2>
                <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.                </p>
                <Button label="Read More" className="underline mt-4" />
              </div>
              <div className="flex flex-col mt-8">
                <img
                  className="w-full h-44 md:h-64 lg:h-72 object-cover rounded-md"
                  src={img1}
                  alt="Blog 2"
                />
                 <div className="flex flex-row gap-4 mt-2 text-sm text-gray-700 items-center">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faContactCard} />
                    <h2 className="font-semibold">Admin</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <h2 className="font-semibold">14 Oct 2022</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faHandPaper} />
                    <h2 className="font-semibold">Handmade</h2>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-2 text-sm text-gray-700 items-center">
                </div>
                <h2 className="text-xl font-semibold mt-4">Second Blog Post Title</h2>
                <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.                </p>
                <Button label="Read More" className="underline mt-4" />
              </div>

              <div className="flex flex-col mt-8">
                <img
                  className="w-full h-44 md:h-64 lg:h-72 object-cover rounded-md"
                  src={img1}
                  alt="Blog 3"
                />
                 <div className="flex flex-row gap-4 mt-2 text-sm text-gray-700 items-center">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faContactCard} />
                    <h2 className="font-semibold">Admin</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <h2 className="font-semibold">14 Oct 2022</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faHandPaper} />
                    <h2 className="font-semibold">Handmade</h2>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-2 text-sm text-gray-700 items-center">
                </div>
                <h2 className="text-xl font-semibold mt-4">Third Blog Post Title</h2>
                <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.                </p>
                <Button label="Read More" className="underline mt-4" />
              </div>
            </div>
          </section>
        </div>
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <section>
            <div className="hidden lg:block px-4 mb-8">
              <CustomInput
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mt-8 px-4">
              <h3 className="text-xl text-[#9F9F9F] font-semibold mb-4">Categories</h3>
              <ul>
                {["Crafts", "Design", "Handmade", "Interior", "Wood"].map((category, idx) => (
                  <li key={idx} className="flex justify-between text-sm mb-2">
                    <span>{category}</span>
                    <span>{Math.floor(Math.random() * 10) + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div lassName="mt-8 px-4">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <div className="grid grid-cols-1 gap-4">
                {[recentImg1, recentImg2, recentImg3, recentImg4, recentImg5].map(
                  (img, index) => (
                    <div
                      className="flex items-center space-x-4 text-sm mb-4"
                      key={index}
                    >
                      <img
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                        src={img}
                        alt={`Recent Post ${index + 1}`}
                      />
                      <div>
                        <h4 className="font-semibold">Post Title {index + 1}</h4>
                        <p className="text-gray-600">Brief description of the post</p>
                        <p className="text-[#9F9F9F]">03 Aug 2022</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Blog;
