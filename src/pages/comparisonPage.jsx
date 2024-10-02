import React from "react";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
import ProductComparison from "../components/comparsionProducts/productComparions";
import Layout from "../components/common/layout";
function ComparisonProduct() {
  return (
    <div>
      <Layout>
      <HeroBreadCrumbOne route={"Comparision"}/>
      <ProductComparison />
      <FeaturesSection />
      </Layout>
    </div>
  );
}
export default ComparisonProduct;
