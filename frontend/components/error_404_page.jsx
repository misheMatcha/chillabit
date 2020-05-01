import React from 'react';
import { Link } from 'react-router-dom'

const Error404Page = () => (
  <div className="error-404-container">
    <div className="error-404-oops">
      Oops!
    </div>
    <div className="error-404-details">
      <p className="error-404-code">404 - PAGE NOT FOUND</p>
      <div className="error-404-message">
        <p>The page you are looking for might have been removed</p>
        <p>had its name changed or is temporarily unavailable.</p>
      </div>
    </div>
    <button className="error-404-button">Go to homepage</button>
  </div>
);

export default Error404Page;