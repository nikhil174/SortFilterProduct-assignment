import React, { useState } from "react";
import Card from "../Card/Card";
import "./products.css";

import { products } from "../../constants/data";
import { useEffect } from "react";

const Products = ({ sorting, filter }) => {
  const [newPro, setNewPro] = useState(products);
  function comparePrice(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  function comparePopularity(a, b) {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    let temp;
    if (sorting === "sprice") {
      products.sort(comparePrice);
      temp = products.map((product) => product);
      setNewPro(temp);
    }
    if (sorting === "popularity") {
      products.sort(comparePopularity);
      temp = products.map((product) => product);
      setNewPro(temp);
    }
    if (filter === "all") {
      setNewPro(temp);
    }
    if (filter === "clothes") {
      temp = products.filter((product) => {
        return product.category === "clothes";
      });
      setNewPro(temp);
    }
    if (filter === "shoes") {
      temp = products.filter((product) => {
        return product.category === "shoes";
      });
      setNewPro(temp);
    }
    if (filter === "backpacks") {
      temp = products.filter((product) => {
        return product.category === "backpacks";
      });
      setNewPro(temp);
    }
  }, [filter, sorting]);

  return (
    <>
      <div className="products">
        <h1 style={{ width: "100%", margin: "13px" }}>Products</h1>
        {newPro &&
          newPro.map((product) => <Card key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default Products;
