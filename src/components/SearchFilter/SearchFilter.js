import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../redux/actions";
import "./SearchFilter.css";

const filterButtons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" },
];

const SearchFilter = ({ updateFilter, filter }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames =
      "btn " + (isActive ? "btn-info" : "btn-outline-secondary");
    return (
      <button
        key={name}
        type="button"
        className={classNames}
        onClick={() => updateFilter(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="filter-btn">
      <div className="btn-group">{buttons}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  updateFilter,
};
//updateFilter

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
