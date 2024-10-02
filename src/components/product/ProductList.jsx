import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShare, FaRegHeart, FaHeart, FaExchangeAlt } from "react-icons/fa";
import productsData from "../../utills/data/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addFavourite,
  removeFavourite,
  addToCart,
} from "../../components/redux/features/productSlice";
function ProductList() {
  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            X
          </button>
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <p className="text-lg">Price: ${product.discountPrice}</p>
          {product.price && (
            <p className="text-sm text-gray-500 line-through">
              Original Price: ${product.price}
            </p>
          )}
          <p className="text-sm text-gray-600">{product.description}</p>

          <div className="mt-4">
            <p className="font-semibold">Reviews:</p>
            <p className="text-sm">"Great product!" - User123</p>
          </div>
        </div>
      </div>
    );
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.product.wishlist);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
    toast("Added to Cart");
  };
  const handleShare = (product) => {
    setSelectedProduct(product);
  };
  const handleCompare = () => {
    navigate("/cart");
  };
  const handleLike = (product) => {
    const isLiked = wishlist.some((item) => item.id === product.id);
    if (isLiked) {
      dispatch(removeFavourite(product));
      toast("Removed from Favourites");
    } else {
      dispatch(addFavourite(product));
      toast("Added to Favourites");
    }
  };
  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20">
      <h2 className="text-[#000000] font-semibold font-poppins text-4xl text-center mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product, index) => (
          <div
            key={index}
            className="relative group p-4 transition-all duration-300"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {product.discount && (
              <div className="absolute top-7 right-7 h-[40px] bg-red-500 text-white px-2 py-3 text-xs rounded-full">
                {product.discount}
              </div>
            )}
            <div className="bg-[#F4F5F7] p-3 transform group-hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-[#898989]">
                {product.name}
              </h3>
              <p className="text-sm text-[#666666]">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#3A3A3A] font-semibold text-lg">
                  ${product.discountPrice}
                </span>
                {product.price && (
                  <span className="text-[#B0B0B0] line-through text-xs">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <div className="absolute inset-0 bg-black opacity-50" />
              <button
                className="bg-white text-[#B88E2F] px-8 py-3 text-md mb-4 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
              <div className="flex space-x-4 text-lg z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(product);
                  }}
                  aria-label="Share product"
                >
                  <FaShare className="text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(product);
                  }}
                  aria-label="Like product"
                >
                  {wishlist.some((item) => item.id === product.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-white" />
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCompare();
                  }}
                  aria-label="Compare product"
                >
                  <FaExchangeAlt className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
export default ProductList;
