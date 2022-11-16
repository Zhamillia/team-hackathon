import React, { useState } from "react";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  const [phones, setPhones] = useState([]);

  return (
    <div
      style={{
        height: "100vh",
      }}>
      {" "}
      <div className="productsPage">products</div>
    </div>
  );

};

export default ProductsPage;
