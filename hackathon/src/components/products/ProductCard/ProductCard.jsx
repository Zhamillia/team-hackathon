import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//custom
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

export default function ProductCard({ item }) {
  //custom
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  // const { addProductToCart, checkProductInCart } = useCart();

  return (
    <Card
      style={{
        marginBottom: "50px",
        background: "#DCDCDC",
      }}
      bg-color="dark"
      sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={item.picture} alt="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Button>
        <Button
          variant="contained"
          disabled
          size="small"
          onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
