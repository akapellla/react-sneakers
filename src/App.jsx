import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoritesItems, setFavoritesItems] = React.useState(null);
  const [orders, setOrders] = React.useState([]);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrdering, setIsOrdering] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  const cartPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [ordersResponce, favoriteResponce, cartResponce, itemsResponce] = await Promise.all([
          axios.get("https://69658430f6de16bde44a826c.mockapi.io/orders"),
          axios.get("https://69658430f6de16bde44a826c.mockapi.io/favorite"),
          axios.get("https://69658430f6de16bde44a826c.mockapi.io/cart"),
          axios.get("https://69658430f6de16bde44a826c.mockapi.io/items"),
        ]);
        setIsLoading(false);
        setOrders(ordersResponce.data);
        setFavoritesItems(favoriteResponce.data);
        setCartItems(cartResponce.data);
        setItems(itemsResponce.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (product) => {
    try {
      const existing = cartItems.find((cart) => String(cart.productId) === String(product.id));
      if (existing) {
        setCartItems((prev) => prev.filter((cart) => cart.id !== existing.id));
        await axios.delete(`https://69658430f6de16bde44a826c.mockapi.io/cart/${existing.id}`);
      } else {
        const tempId = `temp-${product.id}-${Date.now()}`;
        setCartItems((prev) => [...prev, { ...product, productId: product.id, id: tempId }]);
        const res = await axios.post("https://69658430f6de16bde44a826c.mockapi.io/cart", {
          ...product,
          productId: product.id,
        });

        setCartItems((prev) => prev.map((item) => (item.id === tempId ? res.data : item)));
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
    }
  };

  const onOrderItem = async () => {
    if (cartItems.length === 0) return;

    try {
      setIsOrdering(true);
      const res = await axios.post("https://69658430f6de16bde44a826c.mockapi.io/orders", {
        orderItems: cartItems,
      });
      setOrders((prev) => [...prev, res.data]);
      setOrderId(res.data.id);
      setIsOrderComplete(true);

      await Promise.all(
        cartItems.map((item) =>
          axios.delete(`https://69658430f6de16bde44a826c.mockapi.io/cart/${item.id}`)
        )
      );
      setCartItems([]);
    } catch (error) {
      alert("Ошибка при оформлении заказа");
    } finally {
      setIsOrdering(false);
    }
  };

  const onAddToFavorite = async (product) => {
    if (!favoritesItems) return;

    try {
      const existing = favoritesItems.find((fav) => String(fav.productId) === String(product.id));
      if (existing) {
        setFavoritesItems((prev) => prev.filter((fav) => fav.id !== existing.id));
        await axios.delete(`https://69658430f6de16bde44a826c.mockapi.io/favorite/${existing.id}`);
      } else {
        const tempId = `temp-${product.id}-${Date.now()}`;
        setFavoritesItems((prev) => [...prev, { ...product, productId: product.id, id: tempId }]);
        const res = await axios.post("https://69658430f6de16bde44a826c.mockapi.io/favorite", {
          ...product,
          productId: product.id,
        });

        setFavoritesItems((prev) => prev.map((item) => (item.id === tempId ? res.data : item)));
      }
    } catch (error) {
      alert("Ошибка при добавлении в закладки");
    }
  };

  const onDeleteInCart = async (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    try {
      await axios.delete(`https://69658430f6de16bde44a826c.mockapi.io/cart/${id}`);
    } catch (error) {
      console.error("Delete error:", error);
      alert("Ошибка при удалении из корзины");
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
            onClickOrder={onOrderItem}
            isOrderComplete={isOrderComplete}
            orderId={orderId}
            isOrdering={isOrdering}
            onCloseCart={() => {
              setCartOpened(false);
              setIsOrderComplete(false);
              setOrderId(null);
            }}
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
              isLoading={isLoading}
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
        <Route
          path="profile"
          element={
            <ProfilePage orders={orders} cartItems={cartItems} favoritesItems={favoritesItems} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
