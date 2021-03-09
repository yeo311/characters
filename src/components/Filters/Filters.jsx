import React from 'react';

const Filter = ({ name, labelName }) => {
  return (
    <div className="filter_item">
      <label>
        <input type="checkbox" name={name} />
        {labelName}
      </label>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="filters_container">
      <Filter name="isAlive" labelName="생존 인물만" />
      <Filter name="isWomen" labelName="여자" />
      <Filter name="isTvSeries" labelName="TV Series 없음" />
      <button className="init_button">초기화</button>
    </div>
  );
};

export default Filters;
