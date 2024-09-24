import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/common/layout";
import Cart from "../components/product/cartComponent";
import ProductList from "../components/product/ProductList";
import productsData from "../utills/data/product";
import ProductCartDetails from "../components/product/productCartDetails";
import ProductDescription from "../components/product/ProductDescription";
import ProductNavBar from "../components/product/productNavBar";
function ProductDetails() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const product = productsData.find((prod) => prod.id === parseInt(id));
  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsOpenCart(true); 
  };
  return (
    <div>
      <Layout>
        <ProductNavBar />
        <ProductCartDetails product={product} addToCart={addToCart} setIsOpenCart={setIsOpenCart} />
        {isOpenCart && <Cart cartItems={cart} setCartItems={setCart} setIsOpenCart={setIsOpenCart} />}
        <ProductDescription product={product} />
        <ProductList />
      </Layout>
    </div>
  );
}
export default ProductDetails;
