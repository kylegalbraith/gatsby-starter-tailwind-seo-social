import React from "react";
import Helmet from "react-helmet";
import config from "../config/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

export default ({ children }) => (
  <div className="flex flex-col min-h-screen text-grey-darkest">
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: "description", content: config.siteDescription }
      ]}
    />
    <Header />
    <div className="flex flex-col flex-1 container mx-auto p-8 w-full">
      {children}
    </div>
    <Footer />
  </div>
);
