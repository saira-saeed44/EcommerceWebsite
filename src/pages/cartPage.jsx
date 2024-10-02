import React, { useState } from "react";
import Layout from "../components/common/layout";
import FeaturesSection from "../components/common/featuressection";
import CartComponent from "../components/cart/cartComponent";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
import Button from "../components/common/button/button";
import CartList from "../components/cart/cartcomp";
function CartPage() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const toggleCart = () => {
    setIsOpenCart((prev) => !prev);
  };
  return (
    <Layout>
      <HeroBreadCrumbOne route={"Cart"} />
      <CartList />
      {/* <Button 
      className="bg-[#B88E2F] px-8  text-center py-2"
        label="Shopping Cart" 
        onClick={toggleCart} 
      />
      {isOpenCart && <CartComponent setIsOpenCart={setIsOpenCart} />} */}
      <FeaturesSection />
    </Layout>
  );
}

export default CartPage;
