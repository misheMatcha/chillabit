import React from 'react';
import { Link } from 'react-router-dom'

const Error404Page = () => (
  <div className="error-404-container">
    <div className="error-404-oops">
      Oops!
    </div>
    <div className="error-404-details">
      <p className="error-404-code">404 - Page not found</p>
      <p className="error-404-message">
        The page you are looking for might have been removed<br/>
        had its name changed or is temporarily unavailable.
      </p>
    </div>
    <button className="error-404-button">Go to homepage</button>
  </div>
);

export default Error404Page;