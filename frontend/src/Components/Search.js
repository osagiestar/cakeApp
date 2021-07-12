import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ searchForCake }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function submitHandler(event) {
    console.log(searchInput);
    event.preventDefault();
    searchForCake(searchInput);
  }

  return (
    <div className="search">
      <div className="row search-wrapper">
        <div className="col">
          <div className="search-row">
            <input
              type="text"
              id="cake-id"
              className="form-control"
              placeholder="Cake name"
              value={searchInput}
              onChange={handleSearchInput}
            />
            <SearchButton searchForCake={submitHandler} />
          </div>
        </div>
      </div>
    </div>
  );
   
};

export default Search;
