import React from 'react';

const Home = ({ navigateTo }) => {
  return (
    <div>
      <p className='content'><b>YOUR GATEWAY TO MULTILINGUAL MASTERY</b></p>
      <button className="signup" onClick={() => navigateTo('signup')}>
        SIGN UP
      </button>
      <button className="login" onClick={() => navigateTo('login')}> LOGIN </button>
    </div>
  );
};

export default Home;

