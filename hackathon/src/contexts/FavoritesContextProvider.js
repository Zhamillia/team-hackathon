import React, { createContext, useContext, useReducer } from "react";
import { FAVORITES } from "../helpers/consts";

const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const INIT_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAVORITES.GET_FAVORITES:
      return { ...state, favorites: action.payload };

    default:
      return state;
  }
}

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (!favorites) {
      favorites = {
        products: [],
      };
    }

    dispatch({
      type: FAVORITES.GET_FAVORITES,
      payload: favorites,
    });
  };

  const addProductToFavorites = product => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    let newProduct = {
      item: product,
    };

    let productToFind = favorites.products.filter(
      elem => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      favorites.products.push(newProduct);
    } else {
      favorites.products = favorites.products.filter(
        elem => elem.item.id !== product.id
      );
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    getFavorites();
  };

  const deleteProductInFavorites = id => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    favorites.products = favorites.products.filter(elem => elem.item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites();
  };

  const checkProductInFavorites = id => {
    console.log("Fd");
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites) {
      let newFavorites = favorites.products.filter(elem => elem.item.id === id);
      return newFavorites.length > 0 ? true : false;
    }
  };

  const values = {
    addProductToFavorites,
    getFavorites,
    deleteProductInFavorites,
    checkProductInFavorites,

    favorites: state.favorites,
    favoritesLength: state.favoritesLength,
  };

  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};
export default FavoritesContextProvider;
