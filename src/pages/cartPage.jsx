import React from 'react';
import Layout from '../components/common/layout'; 
import FeaturesSection from '../components/common/featuressection';
import CartComponent from '../components/cart/cartComponent';
import HeroBreadCrumbOne from '../components/common/heroBreadCrumbOne';
function CartPage() {
  return (
    <Layout>
      <HeroBreadCrumbOne route={"Cart"} />
      <CartComponent />
      <FeaturesSection />
    </Layout>
  );
}
export default CartPage;
