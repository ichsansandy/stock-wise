import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
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
          <AreaChart
            data={priceDaily}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area
              type="monotone"
              dataKey="Price"
              stroke={color}
              fill={color}
            />
            <Tooltip />
            <XAxis dataKey="Time" hide />
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
