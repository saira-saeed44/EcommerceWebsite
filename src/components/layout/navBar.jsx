  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import img1 from "../../assests/svg/originallogo.png";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHeart, faContactCard } from "@fortawesome/free-regular-svg-icons";
  import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
  import { useSelector } from "react-redux";
  const NavBar = () => {  
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.product.cart);
    return (
      <nav className="bg-white h-16 shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={img1}
                  alt="Furniro logo"
                  className="h-10 md:h-12 pt-3 w-auto"
                />
              </Link>
            </div>
            <div className="hidden pt-3 lg:flex flex-grow items-center justify-center space-x-6">
              <Link to="/" className="text-black px-3 py-2 text-sm md:text-base font-medium">Home</Link>
              <Link to="/shop" className="text-black px-3 py-2 text-sm md:text-base font-medium">Shop</Link>
              <Link to="/about" className="text-black px-3 py-2 text-sm md:text-base font-medium">About</Link>
              <Link to="/contact" className="text-black px-3 py-2 text-sm md:text-base font-medium">Contact</Link>
            </div>
            <div className="hidden relative pt-3 lg:flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faContactCard}
                onClick={() => navigate("/checkout")}
                className="text-gray-700 h-5 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-700 h-5 cursor-pointer"
                onClick={() => navigate("/blog")}
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-700 h-5 cursor-pointer"
                onClick={() => navigate("/wishlist")}
              />
              <div className="relative">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-gray-700 h-5 cursor-pointer"
                  onClick={() => navigate("/cart")}
                />
                {cartItems.length > 0 && (
                  <span className="absolute top-[-8px] right-[-8px] bg-red-600 text-white text-xs font-semibold rounded-full px-1">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="text-black hover:text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-8 md:w-10 h-12 md:h-16 pt-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block text-black px-3 py-2 text-base font-medium">Home</Link>
              <Link to="/shop" className="block text-black px-3 py-2 text-base font-medium">Shop</Link>
              <Link to="/about" className="block text-black px-3 py-2 text-base font-medium">About</Link>
              <Link to="/contact" className="block text-black px-3 py-2 text-base font-medium">Contact</Link>
              <div className="flex space-x-4 px-3 py-2">
                <FontAwesomeIcon
                  icon={faContactCard}
                  onClick={() => navigate("/checkout")}
                  className="text-gray-700 h-5 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-700 h-5 cursor-pointer"
                  onClick={() => navigate("/blog")}
                />
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-gray-700 h-5 cursor-pointer"
                  onClick={() => navigate("/wishlist")}
                />
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-gray-700 h-5 cursor-pointer"
                  onClick={() => navigate("/cart")}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  };
  export default NavBar;
