import React from "react";
import "./Error.scss";
import { Link } from "gatsby";
const Error = () => {
  return (
    <main className="error">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Back Home</Link>
    </main>
  );
};

export default Error;
