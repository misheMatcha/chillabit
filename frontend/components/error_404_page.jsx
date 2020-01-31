import React from 'react';
import { Link } from 'react-router-dom'

const Error404Page = () => (
  <div>
    <h1>Page not found</h1>
    <span><Link to="/">head back</Link></span>
  </div>
);

export default Error404Page;