import img1 from '../../assests/svg/browserRange1.svg';
import img2 from '../../assests/svg/browserRange2.svg';
import img3 from '../../assests/svg/browserRange3.svg';
import img4 from "../../assests/svg/productImage1.svg";
import img5 from "../../assests/svg/productImage2.svg";
import img6 from "../../assests/svg/productImage3.svg";
import img7 from "../../assests/svg/productImage4.svg";
import img8 from "../../assests/svg/productImage5.svg";
import img9 from "../../assests/svg/productImage6.svg";
import overlay from "../../assests/svg/overlay.svg";

export const data = {
  hero: {
    title: "Discover Our New Collection",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    buttonText: "BUY Now",
  },
  Product:[
    {
      id:1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img4,
      discount: "New",
    },
     {
      id:2,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img5,
      discount: "-30%",
    },
  ],
  products: [
    {
      id:"1",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img6,
      discount: "-50%",
      overlay:overlay,
    },
    {
      id:"2",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img7,
      discount: "-30%",
      overlay:overlay,
    },
    {
      id:3,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img8,
      discount: "New",
      overlay:overlay,
    },
    {
      id:"4",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img9,
      discount: "-50%",
      overlay:overlay,

    },
    {
      id:"5",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img5,
      discount: "30%",
      overlay:overlay,

    },
    {
      id:"6",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img6,
      discount: "New",
      overlay:overlay,

    },
    {
      id:"7",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img7,
      discount: "-30%",
      overlay:overlay,

    },
    {
      id:"8",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: img5,
      discount: "-50%",
      overlay:overlay,
    },
  ],
  inspiration: [
    {
      title: "Inner Peace",
      image: "path_to_image_2",
      category: "Bed Room",
    },
  ],
  categories : [
    {
      name: "Dining",
      image: img1, 
    },
    {
      name: "Living",
      image: img2,
    },
    {
      name: "Bedroom",
      image: img3,
    },
  ]
};
