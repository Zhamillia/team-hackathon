import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { Button } from "@mui/material";
import { useFavorites } from "../../../contexts/FavoritesContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

const ProductDetails = ({ item }) => {
  const { id } = useParams();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToFavorites, checkProductInFavorites } = useFavorites();
  const handleDelete = () => {
    deleteProduct(id);
    navigate("/");
  };
  return (
    <>
      {productDetails ? (
        <div>
          <h3>{productDetails.name}</h3>
          <h3>{productDetails.description}</h3>
          <h3>{productDetails.price}</h3>
          <img src={productDetails.picture} alt="" width="250" height="250" />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
      {productDetails && (
        <IconButton
          size="small"
          onClick={() => addProductToCart(productDetails)}>
          <ShoppingCartIcon
            color={checkProductInCart(productDetails.id) ? "primary" : ""}
          />
        </IconButton>
      )}
      {productDetails && (
        <IconButton>
          <GradeIcon
            size="small"
            onClick={() => {
              addProductToFavorites(productDetails);
              console.log(checkProductInFavorites(productDetails.id));
            }}
            color={checkProductInFavorites(productDetails.id) ? "primary" : ""}>
            {/* <ShoppingCartIcon /> */}
          </GradeIcon>
        </IconButton>
      )}

      <Button onClick={() => navigate(`/edit/${id}`)}>Edit</Button>
      <Button onClick={handleDelete}>delete</Button>
    </>
  );
};

export default ProductDetails;
