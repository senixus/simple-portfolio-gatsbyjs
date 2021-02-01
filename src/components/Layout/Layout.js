import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="content">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
