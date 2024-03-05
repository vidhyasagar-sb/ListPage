import React from 'react';

import goBack from '../../assets/images/slideLeftArrow.svg';
import goNext from '../../assets/images/slideRightArrow.svg';

import './layoutCard.css';

const LayoutCard = ({ heading, count, slider, children }) => {
  return (
    <div className='layoutCard'>
      <div className='layoutCardHeader'>
        <h3>{heading}</h3>
        {count && (
          <div className='layoutCardCountDot'>
            <div className='layoutCardCount'>{count}</div>
          </div>
        )}{' '}
        <div className='layoutCardLine'></div>
        {slider && (
          <div className='layoutCardBtnContainer'>
            <img src={goBack} alt='go back' />
            <img src={goNext} alt='go next' />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default LayoutCard;
