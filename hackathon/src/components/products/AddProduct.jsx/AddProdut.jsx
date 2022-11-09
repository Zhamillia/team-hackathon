import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

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
    <>
      <h2>Add Product</h2>

      <input type="text" placeholder="Title" name="name" onChange={handleInp} />
      <br />
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInp}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="Picture"
        name="picture"
        onChange={handleInp}
      />
      <br />
      <input type="text" placeholder="Type" name="type" onChange={handleInp} />
      <br />

      <button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}>
        Save
      </button>
    </>
  );
};

export default AddProduct;
