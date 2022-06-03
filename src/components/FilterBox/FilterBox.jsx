import React from "react";
import "./filterBox.css";

const FilterBox = ({ setFilter, setSorting }) => {
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const handleSort = (e) => {
    setSorting(e.target.value);
  };

  return (
    <div className="filterBox">
      <div className="filter__container">
        <div className="filter" onChange={handleFilter}>
          <p style={{ fontSize: "36px" }}>Filter</p>
          <p style={{ fontSize: "24px" }}>By Category</p>
          <input
            type="radio"
            id="all"
            name="category"
            value="all"
            defaultChecked
          />
          <label htmlFor="all">all</label>
          <br />
          <input type="radio" id="clothes" name="category" value="clothes" />
          <label htmlFor="clothes">clothes</label>
          <br />
          <input type="radio" id="shoes" name="category" value="shoes" />
          <label htmlFor="shoes">shoes</label>
          <br />
          <input
            type="radio"
            id="backpacks"
            name="category"
            value="backpacks"
          />
          <label htmlFor="backpacks">backpacks</label>
          <br />
        </div>
        <div className="sort" onChange={handleSort}>
          <p style={{ fontSize: "36px", marginTop: "20px" }}>Sort</p>
          <input
            type="radio"
            id="popularity"
            name="sorting"
            value="popularity"
          />
          <label htmlFor="popularity">By Popularity</label>
          <br />
          <input
            type="radio"
            id="sprice"
            name="sorting"
            value="sprice"
            defaultChecked
          />
          <label htmlFor="sprice">By Price</label>
          <br />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
