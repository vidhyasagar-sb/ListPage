import React from 'react';
import LayoutCard from '../../LayoutCard';
import Button from '../../Button';
import PlainCard from '../../PlainCard';

import './queriesSection.css';

const QueriesSection = () => {
  return (
    <LayoutCard heading='QUERIES'>
      <PlainCard>
        <div className='homeQueries'>
          <div>
            <h4>Have queries?</h4>
            <p>Our MAven chatbot is here to help you.</p>
          </div>
          <div className='homeQueriesBtnContainer'>
            <Button>Chat</Button>
          </div>
        </div>
      </PlainCard>
    </LayoutCard>
  );
};

export default QueriesSection;
