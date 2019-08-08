import React from 'react';

const Search = ({
  currentString, handleChange, handlePress,
}) => (
  <input
    className="form-control"
    type="text"
    placeholder="Search for a movie title"
    aria-label="Search"
    onChange={handleChange}
    onKeyPress={handlePress}
    autoComplete="off"
  />
);

export default Search;
