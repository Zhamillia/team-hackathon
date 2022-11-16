import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import PaidPage from "./pages/PaidPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 3,
    },
    {
      link: "/paid",
      element: <PaidPage />,
      id: 4,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 5,
    },
    {
      link: "/details/:id",
      element: <ProductDetailsPage />,
      id: 6,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 7,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 8,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 8,
    },
    {
      link: "/favorites",
      element: <FavoritesPage />,
      id: 9,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
