import { Bookmark, ChevronLeft } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link, NavLink, Outlet, useParams,
} from 'react-router-dom';
import PriceHistoryChart from '../components/PriceHistoryChart';

function StockDetailsPage() {
  const { symbol } = useParams();
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <div className="flex justify-center">
      <div className="max-w-wrap box-border w-full ">
        <div className="flex items-center justify-between mt-3 p-2">
          <Link to="/">
            <ChevronLeft className="w-8 h-8 " />
          </Link>
          <div className="text-center text-3xl">{`${symbol}`}</div>
          <Bookmark className="w-8 h-8 " />
        </div>
        <div className="px-4 py-6 lg:hidden">
          <ul className="flex justify-center">
            <NavLink className={({ isActive }) => (isActive ? `${theme} w-[50%] p-2 box-border text-center border-accent border-2 border-b-white  ` : `${theme} w-[50%] text-center p-2 box-border border-2 border-white border-b-accent `)} to={`/${symbol}/overview`}>
              Overview
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? `${theme} w-[50%] p-2 box-border text-center border-accent border-2 border-b-white  ` : `${theme} w-[50%] text-center p-2 box-border border-2 border-white border-b-accent `)} to={`/${symbol}/fundamentals`}>
              Fundamentals
            </NavLink>
          </ul>
          <Outlet />
        </div>
        <div className="hidden lg:block">
          <PriceHistoryChart />
        </div>

      </div>
    </div>
  );
}

export default StockDetailsPage;
