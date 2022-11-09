import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/ProductContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
