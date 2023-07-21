import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function FundamentalsDetails() {
  const theme = useSelector((state) => state.changeTheme.value);
  const { symbol } = useParams();

  return (
    <div className={`flex-col justify-center p-4 border-2 border-t-0 border-accent ${theme}`}>
      {symbol}
      fundamentals
    </div>
  );
}

export default FundamentalsDetails;
