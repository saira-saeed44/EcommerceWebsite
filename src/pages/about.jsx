import React from "react";
import Layout from "../components/common/layout";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
const About = () => {
  return (
    <Layout>
      <HeroBreadCrumbOne route={"About"} />
      <FeaturesSection />
    </Layout>
  );
};
export default About;
