import React from 'react';
import max from '../../assets/images/Max.svg';

import './DashBoardSplidCard.css';

const DashBoardSplideCard = () => {
  return (
    <div>
      <div className='homeCardContainer'>
        <div className=''>
          <p aria-label='close' className='cardTitle'>
            Your time matters
          </p>
          <p aria-label='close' className='cardContent'>
            Unlock quick discharge with Express checkout!
          </p>
        </div>
        <div>
          <img aria-label='close' src={max} alt='max' />
        </div>
      </div>
    </div>
  );
};

export default DashBoardSplideCard;
