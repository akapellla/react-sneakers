import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoriteItems, setFavoriteItems] = React.useState([]);

  const cartPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  React.useEffect(() => {
    axios
      .get("https://69658430f6de16bde44a826c.mockapi.io/items")
      .then((res) => setItems(res.data));

    axios
      .get("https://69658430f6de16bde44a826c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
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
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickDelete={onDeleteInCart}
          onClickClose={() => setCartOpened(false)}
          cartPrice={cartPrice}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} cartPrice={cartPrice} />

      <main>
        <section className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1 className="">Все кроссовки</h1>
            <form className="search-block d-flex " action="">
              <img src="/img/search.svg" alt="" />
              <input
                value={searchValue}
                onChange={onChangeSearchInput}
                type="text"
                placeholder="Поиск..."
              />
            </form>
          </div>

          <div className="cards d-flex flex-wrap">
            {items
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => {
                const isAdded = cartItems.some(
                  (c) => c.imageUrl === item.imageUrl
                );
                const isFavorite = favoriteItems.some(
                  (c) => c.imageUrl === item.imageUrl
                );

                return (
                  <Card
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onPlus={(obj) => onAddToCart(obj)}
                    added={isAdded}
                  />
                );
              })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
