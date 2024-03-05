import React from 'react';
import caution from '../../assets/images/caution.svg';
import arrowRight from '../../assets/images/arrowRight.svg';

import './note.css';

const Note = ({ text, type, onClick }) => {
  return (
    <div
      className='noteContainer'
      style={{ backgroundColor: type === 'secondary' ? '#fff' : '#DBEAFE' }}
    >
      <img src={caution} alt='note' />
      <p>{text}</p>
      <img
        src={arrowRight}
        alt='arrow right'
        className='noteArrow'
        onClick={onClick}
      />
    </div>
  );
};

export default Note;
