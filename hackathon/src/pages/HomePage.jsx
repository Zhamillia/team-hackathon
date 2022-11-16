import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
// import SwiperSlide from "../components/SwiperSlide/SwiperSlide";
import { useProducts } from "../contexts/ProductContextProvider";
import Carousel from "../components/SwiperSlide/SwiperSlide";
import Carousel2 from "../components/SwiperSlide2/SwiperSlide2";
import ProductCard from "../components/products/ProductCard/ProductCard";

// import "../../../styles/ProductsList.css";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
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
      <Carousel />

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

      <h2 style={{ textAlign: "center", fontSize: "36px", textWidth: "bold" }}>
        Выберите свой iPhone
      </h2>
      <h6
        style={{
          textAlign: "center",
          fontSize: "20px",
          textWidth: "bold",
          color: "gainsboro",
        }}>
        Сравните все модели iPhone
      </h6>
      <Carousel2 />
    </div>
  );
};

export default HomePage;
