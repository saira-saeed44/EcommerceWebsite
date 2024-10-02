import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img1 from "../../assests/svg/Asgaard sofa 5.svg";
import img2 from "../../assests/svg/samplesofa1.svg";
import img3 from "../../assests/svg/samplesofa2.svg";
import img4 from "../../assests/svg/samplesofa1.svg";
import img5 from "../../assests/svg/samplesofa2.svg";
const ProductCartDetails = ({ addToCart, setIsOpenCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const product = {
    name: "Asgaard Sofa",
    price: 250000,
    size: size,
    color: color,
    quantity: quantity,
    image: img1,
  };
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    addToCart(product);
    setIsOpenCart(true);
  };
  const handleCompare = () => {
    navigate("/compare");
  };
  return (
    <div className="container mx-auto p-6 mt-16">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="hidden lg:flex flex-col space-y-4 w-1/6">
          {[img2, img3, img4, img5].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`cartview ${index + 1}`}
              className="w-full h-auto object-cover "
            />
          ))}
        </div>
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={img1}
            alt="Asgaard Sofa"
            className="w-full h-auto object-cover bg-[#F9F1E7] mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
            Asgaard Sofa
          </h1>
          <p className="text-2xl text-[#9F9F9F] font-semibold mb-2">
            Rs. 250,000.00
          </p>
          <p className="text-lg text-[#FFC700]">★★★★☆ (4.5)</p>
          <p className="text-[#000] mb-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="mb-4">
            <label className="block font-medium mb-1">Size</label>
            <div className="flex flex-wrap space-x-2">
              {["XS", "L", "XL"].map((sizeOption) => (
                <button
                  key={sizeOption}
                  className={`py-2 px-4 border ${
                    size === sizeOption
                      ? "bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7]"
                  } rounded-lg`}
                  onClick={() => setSize(sizeOption)}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Color</label>
            <div className="flex flex-wrap space-x-2">
              {["#816DFA", "#000", "#B88E2F"].map((colorOption, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    color === colorOption ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: colorOption }}
                  onClick={() => setColor(colorOption)}
                ></div>
              ))}
            </div>
          </div>
          <div className="mb-4 flex items-center space-x-4">
            <label className="block font-medium">Quantity</label>
            <button
              className="px-4 py-2 text-[#9F9F9F] rounded-lg"
              onClick={() => handleQuantityChange("decrement")}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-4 py-2 text-[#9F9F9F] rounded-lg"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mb-6">
            <button
              className="w-full md:w-1/2 hidden text-[#000] border border-[#000] py-2 transition hover:bg-[#B88E2F] hover:text-white"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
            <button
              className="w-full md:w-1/2 text-[#000] border border-[#000] py-2 transition hover:bg-[#B88E2F] hover:text-white"
              onClick={handleCompare}
            >
              Compare
            </button>
          </div>
          <div className="text-[#9F9F9F] mb-4">
            <p>
              SKU: <span className="text-gray-[#9F9F9F]">SS001</span>
            </p>
            <p>
              Category: <span className="text-gray-[#9F9F9F]">Sofas</span>
            </p>
            <p>
              Tags:{" "}
              <span className="text-gray-[#9F9F9F]">
                Sofa, Chair, Home, Shop
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span>Share:</span>
            <FaFacebook className="cursor-pointer transition hover:text-[#98953b]" />
            <FaTwitter className="cursor-pointer transition hover:text-[#98953b]" />
            <FaInstagram className="cursor-pointer transition hover:text-[#98953b]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCartDetails;
