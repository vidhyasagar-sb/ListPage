import React from 'react';
import PlainCard from '../../PlainCard';
import Button from '../../Button';

import './reimbursement.css';
import LayoutCard from '../../LayoutCard';

const ReimbursementSection = () => {
  return (
    <LayoutCard heading='REIMBURSEMENT'>
      <div className='homeReimbursement'>
        <PlainCard>
          <h3>Want to apply for Reimbursement?</h3>
          <p>
            Submit and monitor your reimbursement claims online, reduce wait
            times for faster settlements.
          </p>
          <div style={{ width: '100%' }}>
            <Button>
              <h4>Submit Claim</h4>
            </Button>
          </div>
        </PlainCard>
      </div>
    </LayoutCard>
  );
};

export default ReimbursementSection;
