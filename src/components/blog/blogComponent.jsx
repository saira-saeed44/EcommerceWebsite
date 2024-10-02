import React, { useState } from "react";
import recentImg1 from "../../assests/svg/browserRange1.svg";
import recentImg2 from "../../assests/svg/blogminiimage.svg";
import recentImg3 from "../../assests/svg/Mask Group (1).svg";
import recentImg4 from "../../assests/svg/gallery6.svg";
import recentImg5 from "../../assests/svg/gallery2.svg";
import CustomInput from "../common/inputField/inputField";
import blogPosts from "../../utills/data/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faCalendarCheck, faHandPaper } from "@fortawesome/free-regular-svg-icons";
import Button from "../common/button/button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts); 
  const handleSearch = (value) => {
    setSearchTerm(value);
    setShowSuggestions(true); 
    if (value) {
      const filteredSuggestions = blogPosts.filter(post =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setFilteredPosts(blogPosts); 
      setShowSuggestions(false); 
    }
  };
  const handleSuggestionClick = (post) => {
    setSearchTerm(post.title);
    setShowSuggestions(false); 
    const updatedPosts = filteredPosts.filter(p => p.title !== post.title);
    setFilteredPosts([post, ...updatedPosts]); 
  };
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="w-full lg:w-2/3">
          <section>
            <div className="max-w-full lg:max-w-2xl ml-4 lg:ml-0 pt-8 lg:pt-14">
              <div className="relative mb-8">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <CustomInput
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onFocus={() => setShowSuggestions(filteredPosts.length > 0)} 
                />
                {showSuggestions && searchTerm && (
                  <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg z-10">
                    {filteredPosts.slice(0, 5).map((post, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSuggestionClick(post)} 
                      >
                        {post.title}
                      </li>
                    ))}
                    {filteredPosts.length === 0 && (
                      <li className="px-4 py-2 text-gray-500">No results found</li>
                    )}
                  </ul>
                )}
              </div>
              {filteredPosts.map((post, index) => (
                <div key={index} className="flex flex-col mt-8">
                  <img
                    className="w-full h-44 md:h-64 lg:h-72 object-cover rounded-md"
                    src={post.img}
                    alt={`Blog ${index + 1}`}
                  />
                  <div className="flex flex-row gap-4 mt-2 text-sm text-gray-700 items-center">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faContactCard} />
                      <h2 className="font-semibold">{post.author}</h2>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faCalendarCheck} />
                      <h2 className="font-semibold">{post.date}</h2>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faHandPaper} />
                      <h2 className="font-semibold">Handmade</h2>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
                  <p className="text-gray-600 mt-2">{post.description}</p>
                  <Button label="Read More" className="underline mt-4" />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <section>
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
            <div className="mt-8 px-4">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <div className="grid grid-cols-1 gap-4">
                {[recentImg1, recentImg2, recentImg3, recentImg4, recentImg5].map((img, index) => (
                  <div className="flex items-center space-x-4 text-sm mb-4" key={index}>
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
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Blog;
