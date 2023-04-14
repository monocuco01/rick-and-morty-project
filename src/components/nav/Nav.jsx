import React from "react";
import SearchBar from "../searchBar/SearchBar";

const Nav = (props) => {
  return (
    <div
      className="arrozconmango
      "
    >
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
