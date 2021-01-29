import React from "react";
import Layout from "../components/Layout/Layout";
import Skills from "../components/Skills/Skills";
import Seo from "../components/Seo/Seo";

const SkillsPage = () => {
  return (
    <Layout>
      <Seo title="Experience & Skills" />
      <Skills />
    </Layout>
  );
};

export default SkillsPage;
