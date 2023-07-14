import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function StockCard({ data }) {
  return (
    <Link to={`/${data.id}`} className="bg-primary aspect-square magenta-madness lg:w-[200px]">
      {data.title}
    </Link>
  );
}

StockCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockCard;
