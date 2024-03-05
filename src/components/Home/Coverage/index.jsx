import React from 'react';
import LayoutCard from '../../LayoutCard';
import PlainCard from '../../PlainCard';
import SearchInput from '../../SearchInput';

import './coverage.css';

const Coverage = () => {
  return (
    <LayoutCard heading='COVERAGE'>
      <div className='coverageSection'>
        <PlainCard>
          <h3>Know your Coverage</h3>
          <p>
            Check whether your treatment is covered, max. coverage amount and
            the out-of-pocket expense.
          </p>
          <SearchInput placeholder='Search for ailment' />
        </PlainCard>
      </div>
    </LayoutCard>
  );
};

export default Coverage;
