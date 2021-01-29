import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo/Seo";

const NotFoundPage = () => {
  return (
    <main>
      <Seo title="404" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Back Home</Link>
    </main>
  );
};

export default NotFoundPage;
