import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
// import Button from "@mui/material/Button";
import { FaBars } from "react-icons/fa";


import "../../../styles/ProductsList.css";

const ProductsList = ({ page, setPage }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
    console.log(currentData());
  }, []);

  const itemsOnPage = 6;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div>

      <h2 style={{ marginLeft: "100px", fontSize: "24px" }}>Products List:</h2>

      <br />
      <br />
      <br />

      <div className="card">
        {products ? (
          currentData().map(item => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>

      <Pagination
        color="primary"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "100px",
        }}
        count={count}
        page={page}
        onChange={handlePage}
      />
    </div>
  );
};

export default ProductsList;
