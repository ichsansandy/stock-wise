import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function StockCard({ data }) {
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <Link to={`/${data.id}`} className={`bg-primary aspect-square magenta-madness lg:w-[200px] ${theme}`}>
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
