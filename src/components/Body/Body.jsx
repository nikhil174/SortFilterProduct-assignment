import React, { useState } from "react";
import "./body.css";
import FilterBox from "../FilterBox/FilterBox";
import Products from "../Products/Products";

const Body = () => {
  const [filter, setFilter] = useState("all");
  const [sorting, setSorting] = useState("sprice");

  return (
    <div className="body">
      <FilterBox setFilter={setFilter} setSorting={setSorting} />
      <Products filter={filter} sorting={sorting} />
    </div>
  );
};

export default Body;
