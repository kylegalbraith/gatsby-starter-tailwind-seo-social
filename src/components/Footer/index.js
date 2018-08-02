import React from "react";
import config from "../../config/config";

const Footer = () => (
  <div className="bg-grey-lightest">
    <div className="text-center max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p>
        <a
          href={config.siteUrl}
          className="no-underline text-indigo-darkest hover:text-grey-darkest"
        >
          This blog is powered by <a href="https://www.gatsbyjs.org/">GatsbyJS</a> using the gatsby-starter-tailwind-seo-social from <a href="https://blog.kylegalbraith.com">Kyle Galbraith</a>.
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
