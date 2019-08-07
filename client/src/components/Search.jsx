import React from 'react';

const Search = ({
  currentString, searchString, handleChange, handlePress,
}) => (
  <input
    className="form-control"
    type="text"
    placeholder="Search for a movie title"
    aria-label="Search"
    onChange={handleChange}
    onKeyPress={handlePress}
  />
);

export default Search;
