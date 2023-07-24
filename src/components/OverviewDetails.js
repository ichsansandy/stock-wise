import React from 'react';
import PriceHistoryChart from './PriceHistoryChart';
import { selectTheme } from '../redux/theme/changeThemeSlice';
import { useAppSelector } from '../redux/hooks';

function OverviewDetails() {
  const theme = useAppSelector(selectTheme);

  return (
    <div
      className={`flex-col justify-center p-4 border-2 border-t-0 border-accent ${theme}`}
    >
      <PriceHistoryChart />
    </div>
  );
}

export default OverviewDetails;
