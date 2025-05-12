import React from 'react';
import { assets } from '../../assets/assets';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <div className="error-page">
        <h1 className='TopHeading'>404 - Page Under Construction</h1>
        <img src={assets.ErrorPageLogo} className="ErrorImage" alt="Error Page" />
      <h1 className='BottomHeading'>Contact aimpendance@gmail.com for more</h1>
      </div>
    </div>
  );
};

export default ErrorPage;