import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="form-input"
      />
    </form>
  );
};

export default SearchForm;
