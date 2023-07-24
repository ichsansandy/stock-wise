import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/theme/changeThemeSlice';

function FundamentalsDetails() {
  const theme = useAppSelector(selectTheme);
  const { symbol } = useParams();

  return (
    <div className={`flex-col justify-center p-4 border-2 border-t-0 border-accent ${theme}`}>
      {symbol}
      fundamentals
    </div>
  );
}

export default FundamentalsDetails;
