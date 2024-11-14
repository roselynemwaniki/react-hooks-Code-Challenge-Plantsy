import React from "react";

function Search({ onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search"
        className="search-input"
        placeholder="Search plants by name..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default Search;