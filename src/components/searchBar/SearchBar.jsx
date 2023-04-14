import React from "react";
import "./searchBar.css";

export default function SearchBar(props) {
  const handleSearch = () => {
    const input = document.getElementById("search-input").value;
    const characterID = parseInt(input);
    props.onSearch(characterID);
  };

  return (
    <div>
      <div>
        <input type="search" id="search-input" className="search-input" />
        <button className="search-button" onClick={handleSearch}>
          add
        </button>
      </div>
    </div>
  );
}
