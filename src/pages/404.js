import * as React from "react";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import Error from "../components/Error/Error";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404" />
      <Error />
    </Layout>
  );
};

export default NotFoundPage;
