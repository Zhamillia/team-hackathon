import React, { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

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
    <div>
      <div id="edit-div">
        <div id="edit-form">
          {product ? (
            <>
              <h2 id="edit-h2">Add Product</h2>

              <input
                className="add-inp"
                type="text"
                placeholder="Title"
                name="name"
                onChange={handleInp}
                value={product.name}
              />
              <br />
              <input
                className="add-inp"
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleInp}
                value={product.description}
              />
              <br />
              <input
                className="add-inp"
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleInp}
                value={product.price}
              />
              <br />
              <input
                className="add-inp"
                type="text"
                placeholder="Picture"
                name="picture"
                onChange={handleInp}
                value={product.picture}
              />
              <br />
              <input
                className="add-inp"
                type="text"
                placeholder="Type"
                name="type"
                onChange={handleInp}
                value={product.type}
              />
              <br />

              <Button
                variant="contained"
                id="edit-btn"
                onClick={() => {
                  saveEditedProduct(product);
                  navigate("/");
                }}>
                Save Changes
              </Button>
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
