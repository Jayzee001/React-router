import React from 'react';
import './css.css'

const Filter = ({ filterTitle, filterRating, handleTitleChange, handleRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={handleTitleChange}
      />
      <input
        type="integer"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;