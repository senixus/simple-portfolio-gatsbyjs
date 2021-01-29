import React from "react";
import Layout from "../components/Layout/Layout";
import About from "../components/About/About";
import Seo from "../components/Seo/Seo";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <About />
    </Layout>
  );
};

export default AboutPage;
