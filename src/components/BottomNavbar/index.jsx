import React from 'react';

import './bottomNavbar.css';

const BottomNavbar = () => {
  return (
    // <div className='navigationContainer'>
    <div className='navigation'>
      <div></div>
      <div className='menuToggle'>
        <i></i>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Claims</p>
          </li>
          <li>
            <p>Actions</p>
          </li>
          <li>
            <p>Policies</p>
          </li>
          <li>
            <p>Account</p>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BottomNavbar;
