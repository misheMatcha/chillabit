import React from 'react';
import { Link } from 'react-router-dom'

const Error404Page = () => (
  <div id="error-404">
    <h1>Oof, you must be lost.</h1>
    <div className="error-image"></div>
    <p>Let's point you back in the right direction.
    <span><Link to="/">Click here to head back.</Link></span>
    </p>
  </div>
);

export default Error404Page;