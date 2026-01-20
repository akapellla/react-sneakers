import Card from "../../components/Card";
import styles from "./HomePage.module.scss";

const HomePage = ({
  items,
  cartItems,
  favoritesItems,
  searchValue,
  onAddToFavorite,
  onAddToCart,
  onChangeSearchInput,
}) => {
  return (
    <section className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">Все кроссовки</h1>
        <form className={`${styles.searchBlock} d-flex`} action="">
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
            const isAdded = cartItems.some((c) => c.imageUrl === item.imageUrl);
            const isFavorite = favoritesItems?.some(
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
                onFavorite={(obj) => onAddToFavorite(obj)}
                favorite={isFavorite}
              />
            );
          })}
      </div>
    </section>
  );
};

export default HomePage;
