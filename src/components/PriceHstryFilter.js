import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function PriceHstryFilter({ onClick, active, text }) {
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${theme} ${
        active
          ? 'bg-primary border-secondary text-textClr'
          : 'border-primary text-primary'
      }`}
    >
      {text}
    </button>
  );
}

PriceHstryFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default PriceHstryFilter;
