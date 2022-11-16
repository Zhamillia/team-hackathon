import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { Button } from "@mui/material";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    type: "",
    name: "",
    description: "",
    price: "",
    picture: "",
  });

  const handleInp = e => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div id="add-div">
        <div id="add-form">
          <h2 id="add-h2">Add Product</h2>

          <input
            className="add-inp"
            type="text"
            placeholder="Title"
            name="name"
            onChange={handleInp}
          />
          <br />
          <input
            className="add-inp"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInp}
          />
          <br />
          <input
            className="add-inp"
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleInp}
          />
          <br />
          <input
            className="add-inp"
            type="text"
            placeholder="Picture"
            name="picture"
            onChange={handleInp}
          />
          <br />
          <input
            className="add-inp"
            type="text"
            placeholder="Type"
            name="type"
            onChange={handleInp}
          />
          <br />

          <Button
            variant="contained"
            id="add-btn"
            onClick={() => {
              addProduct(product);
              navigate("/products");
            }}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
