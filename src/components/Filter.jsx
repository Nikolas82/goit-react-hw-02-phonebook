import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export const Filter = ({ valueFilter, onChangeFilter }) => {
  return (
    <>
      <label>
        <p className={css.text}>Find contacts by name</p>
        <input type="text" value={valueFilter} onChange={onChangeFilter} />
      </label>
    </>
  );
};

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
