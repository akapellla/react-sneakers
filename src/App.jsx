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

  React.useEffect(() => {
    axios
      .get("https://69658430f6de16bde44a826c.mockapi.io/items")
      .then((res) => setItems(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://69658430f6de16bde44a826c.mockapi.io/cart", obj);

    setCartItems((prev) => {
      const exists = prev.some((item) => item.imageUrl === obj.imageUrl);
      if (exists) {
        return prev.filter((item) => item.imageUrl !== obj.imageUrl);
      } else {
        return [...prev, obj];
      }
    });
  };

  const onDeleteInCart = (obj) => {
    console.log(obj?.title + " delete");
    setCartItems((prev) =>
      prev.filter((data) => data.imageUrl !== obj.imageUrl)
    );
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickDelete={(obj) => onDeleteInCart(obj)}
          onClickClose={() => setCartOpened(false)}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

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
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
