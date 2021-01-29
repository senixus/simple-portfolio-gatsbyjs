import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Works from "../components/Works/Works";

const WorksPage = () => {
  return (
    <Layout>
      <Seo title="Works" />
      <Works />
    </Layout>
  );
};

export default WorksPage;
