import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/ProductContextProvider";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </>
  );
};

export default App;
