import React from "react";
import "./SearchPanel.css";

import { connect } from "react-redux";
import { updateSearch } from "../../redux/actions";

const SearchPanel = ({ updateSearch, search }) => {
  const changeInputHandler = (event) => {
    updateSearch(event.target.value);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      value={search}
      onChange={changeInputHandler}
      placeholder={"Filter task"}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  updateSearch,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
