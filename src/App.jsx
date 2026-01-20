import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoritesItems, setFavoritesItems] = React.useState(null);

  const cartPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  React.useEffect(() => {
    axios
      .get("https://69658430f6de16bde44a826c.mockapi.io/items")
      .then((res) => setItems(res.data));

    axios
      .get("https://69658430f6de16bde44a826c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));

    axios
      .get("https://69658430f6de16bde44a826c.mockapi.io/favorite")
      .then((res) => setFavoritesItems(res.data))
      .catch(() => setFavoritesItems([]));
  }, []);

  const onAddToCart = async (obj) => {
    const existing = cartItems.find((item) => item.imageUrl === obj.imageUrl);

    try {
      if (existing) {
        await axios.delete(
          `https://69658430f6de16bde44a826c.mockapi.io/cart/${existing.id}`
        );

        setCartItems((prev) => prev.filter((item) => item.id !== existing.id));
      } else {
        const res = await axios.post(
          "https://69658430f6de16bde44a826c.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, res.data]);
      }
    } catch (e) {
      console.error("Cart toggle error:", e);
    }
  };

  const onAddToFavorite = async (obj) => {
    const existing = favoritesItems.find(
      (item) => item.imageUrl === obj.imageUrl
    );

    try {
      if (existing) {
        await axios.delete(
          `https://69658430f6de16bde44a826c.mockapi.io/favorite/${existing.id}`
        );

        setFavoritesItems((prev) =>
          prev.filter((item) => item.id !== existing.id)
        );
      } else {
        const res = await axios.post(
          "https://69658430f6de16bde44a826c.mockapi.io/favorite",
          obj
        );
        setFavoritesItems((prev) => [...prev, res.data]);
      }
    } catch (e) {
      console.error("favorite toggle error:", e);
    }
  };

  const onDeleteInCart = async (id) => {
    try {
      await axios.delete(
        `https://69658430f6de16bde44a826c.mockapi.io/cart/${id}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            cartOpened={cartOpened}
            setCartOpened={setCartOpened}
            cartItems={cartItems}
            cartPrice={cartPrice}
            onDeleteInCart={onDeleteInCart}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              items={items}
              cartItems={cartItems}
              favoritesItems={favoritesItems}
              searchValue={searchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              onChangeSearchInput={onChangeSearchInput}
            />
          }
        />

        <Route
          path="favorites"
          element={
            <FavoritePage
              favoritesItems={favoritesItems}
              cartItems={cartItems}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
