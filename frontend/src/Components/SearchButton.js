import React from "react";

const SearchButton = ({searchForCake}) => {
//   const [buttonVal, setButtonVal] = useState(false);


  return <button onClick= {searchForCake} className="btn btn-primary">Search</button>;
};
// value={buttonSearch} onSubmit={handleSearchButton}
export default SearchButton; 