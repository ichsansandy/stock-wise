import React from 'react';
import { useSelector } from 'react-redux';
import PriceHistoryChart from './PriceHistoryChart';

function OverviewDetails() {
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <div
      className={`flex-col justify-center p-4 border-2 border-t-0 border-accent ${theme}`}
    >
      <PriceHistoryChart />
    </div>
  );
}

export default OverviewDetails;
