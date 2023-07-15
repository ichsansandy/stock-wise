import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function StockCard({ data }) {
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <Link to={`/${data.symbol}`} className={`text-white flex flex-col items-start justify-end p-3 bg-primary aspect-square magenta-madness lg:w-[240px] lg:rounded-2xl ${theme}`}>
      <div className="font-bold text-xl md:text-3xl">
        {data.symbol}
      </div>
      <div className="text-xs md:text-base">
        {data.name}
      </div>
    </Link>
  );
}

StockCard.propTypes = {
  data: PropTypes.shape({
    cik: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockCard;
