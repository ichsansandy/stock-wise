import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { fetchPriceDetailsChange } from '../redux/stockDetails/stockDetailsSlice';
import {
  convertDateToUnixTimestamp,
  createDate,
  dateFilter,
} from '../utils/dateUtils';
import PriceHstryFilter from './PriceHstryFilter';
import { apiFinnhubPrice } from '../assets/api';

function PriceHistoryChart() {
  const { symbol } = useParams();
  const { priceDaily, status } = useSelector((state) => state.stockDetails);
  const [filter, setFilter] = useState('1W');
  const color = useSelector((state) => (state.changeTheme.color));
  const dispatch = useDispatch();

  useEffect(() => {
    const getDateInterval = () => {
      const { weeks, months, years } = dateFilter[filter];

      const endDate = new Date();

      const startDate = createDate(endDate, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const { startTimestampUnix, endTimestampUnix } = getDateInterval();
    const resolution = dateFilter[filter].res;
    dispatch(
      fetchPriceDetailsChange(
        apiFinnhubPrice(
          symbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix,
        ),
      ),
    );
  }, [symbol, filter, dispatch]);

  if (status !== 'completed') {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  const minValue = Math.min(...priceDaily.map((item) => (item.Price)));
  const maxValue = Math.max(...priceDaily.map((item) => (item.Price)));
  const yPaddingPercentage = 0.05;
  const yAxisMin = Math.floor(minValue * (1 - yPaddingPercentage));
  const yAxisMax = Math.ceil(maxValue * (1 + yPaddingPercentage));

  return (
    <>
      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={priceDaily}>
            <XAxis
              dataKey="Time"
            />
            <YAxis
              width={40}
              domain={[yAxisMin, yAxisMax]}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Price"
              stroke={color}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ul className="flex justify-center">
        {Object.keys(dateFilter).map((item) => (
          <li key={item}>
            <PriceHstryFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default PriceHistoryChart;
