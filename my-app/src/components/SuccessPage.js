import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div>
      <h1>Success Page</h1>
      <p>Heyy Dear Welcome!</p>
      <Link to = '/'>Go back to registration</Link>
    </div>
  );
};

export default SuccessPage;
