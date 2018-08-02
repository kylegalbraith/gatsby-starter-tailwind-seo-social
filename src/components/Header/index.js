import React from "react";
import Link from "gatsby-link";
import logo from "../../images/favicon.png";
import config from "../../config/config";

const Header = () => {
  return (
    <nav className="bg-grey-lightest">
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-center lg:text-left">
          <Link to="/" className="lg:inline-flex items-center no-underline text-grey-darkest hover:text-black">
            <div className="mb-4 flex-1 pt-5">
              <img
                src={logo}
                alt="The blog of Kyle Galbraith, Software Engineer & Entrepreneur"
                className="w-24 h-24 border-indigo-darkest mr-4 rounded-full" />
            </div>
            <div className="flex-2">
              <h1 className="text-5xl ml-2 font-hairline text-indigo-darkest">
                {config.authorName}
              </h1>
              <span className="block ml-2 mt-2 font-hairline text-indigo-darkest">
                {config.siteDescription}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
