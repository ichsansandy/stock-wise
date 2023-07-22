import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
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
  const { priceHistory, status } = useSelector((state) => state.stockDetails);
  const [filter, setFilter] = useState('1W');
  const color = useSelector((state) => state.changeTheme.color);
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

  const minValue = Math.min(...priceHistory.map((item) => (item.Price)));
  const maxValue = Math.max(...priceHistory.map((item) => (item.Price)));
  const yPaddingPercentage = 0.05;
  const yAxisMin = Math.floor(minValue * (1 - yPaddingPercentage));
  const yAxisMax = Math.ceil(maxValue * (1 + yPaddingPercentage));

  if (status !== 'completed') {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={priceHistory}>
            <defs>
              <linearGradient
                id="chartColor"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={color}
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor={color}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="Price"
              stroke={color}
              fill="url(#chartColor)"
              fillOpacity={1}
            />
            <Tooltip />
            <XAxis
              dataKey="Time"
              hide
            />
            <YAxis
              domain={[yAxisMin, yAxisMax]}
              hide
            />
          </AreaChart>
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
