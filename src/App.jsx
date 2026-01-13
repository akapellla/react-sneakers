import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://69658430f6de16bde44a826c.mockapi.io/items")
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, []);

  const onAddToCart = (obj) => {
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
              <input type="text" placeholder="Поиск..." />
            </form>
          </div>

          <div className="cards d-flex flex-wrap">
            {items.map((item) => (
              <Card
                key={item.imageUrl}
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
