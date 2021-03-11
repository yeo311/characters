import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilters, restoreItems } from '../../modules/characterList';

const Filter = ({ name, labelName, handleChange }) => {
  return (
    <div className="filter_item">
      <label className="switch">
        <input type="checkbox" name={name} onChange={handleChange} />
        <span className="slider"></span>
      </label>
      {labelName}
    </div>
  );
};

const Filters = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilters(e.target.name, e.target.checked));
  };

  const handleRestore = () => {
    dispatch(restoreItems());
  };

  return (
    <div className="filters_container">
      <Filter
        name="alive"
        labelName="생존 인물만"
        handleChange={handleChange}
      />
      <Filter name="women" labelName="여자" handleChange={handleChange} />
      <Filter
        name="tvSeries"
        labelName="TV Series 없음"
        handleChange={handleChange}
      />
      <button className="init_button" onClick={handleRestore}>
        초기화
      </button>
    </div>
  );
};

export default Filters;
