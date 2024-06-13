import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Resume Builder</h1>
      <Link to="/build">Create Your Resume</Link>
    </div>
  );
};

export default Home;
