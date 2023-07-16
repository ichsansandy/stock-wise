import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ChevronDown, ChevronUp } from 'lucide-react';

function StockCard({ data }) {
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <Link to={`/${data.symbol}`} className={`text-white flex flex-col items-start justify-end p-3 bg-primary  aspect-square hover:scale-95 transition outline-offset-8 border-spacing-4 hover:opacity-75 hover:border-accent  hover:border-4 lg:w-[240px] lg:rounded-2xl ${theme}`}>
      <div className="flex items-center w-full justify-between">
        <div className="font-bold text-xl md:text-3xl">
          {data.symbol}
        </div>
        <div className="text-lg flex items-center">
          {data.oneDay > 0 ? <ChevronUp /> : <ChevronDown /> }
          {`${data.oneDay} %`}
        </div>
      </div>
      <div className="flex items-center w-full justify-between">
        <div className="text-xs w-[50%] line-clamp-1 md:text-base">
          {data.name}
        </div>
        <div className="text-xs flex items-center gap-1 ">
          YTD
          {data.ytd > 0 ? <ChevronUp className="w-4" /> : <ChevronDown className="w-4" /> }
          {`${data.ytd} %`}
        </div>
      </div>
    </Link>
  );
}

StockCard.propTypes = {
  data: PropTypes.shape({
    cik: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    oneDay: PropTypes.string.isRequired,
    ytd: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockCard;
