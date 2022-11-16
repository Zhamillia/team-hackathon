import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/ProductContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";

const App = () => {
  return (
    <div>
      <FavoritesContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <AuthContextProvider>
              <Navbar />
              <MainRoutes />
              <Footer />
            </AuthContextProvider>
          </ProductContextProvider>
        </CartContextProvider>
      </FavoritesContextProvider>
    </div>
  );
};

export default App;
