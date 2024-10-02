import React from "react";
import Layout from "../components/common/layout";
import BlogComponeent from "../components/blog/blogComponent";
import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
function BlogPage() {
  return (
    <Layout>
      <HeroBreadCrumbOne route={"Blog"} />
      <BlogComponeent />
      <FeaturesSection />
    </Layout>
  );
}
export default BlogPage;
