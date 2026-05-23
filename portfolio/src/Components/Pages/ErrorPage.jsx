import React from "react";
import { assets } from "../../assets/assets";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <div className="error-page-heading">
        Turns out rebuilding your own website is harder than rebuilding
        production apps.
      </div>
      <div className="error-page-bottom">
        Recruiters, collaborators, curious humans reach out.
        <a id="emailMe-button" href="mailto:aimpendance@gmail.com">
          <button >Email Me</button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
