import Card from "../components/Card";

const Favoritepage = ({
  favoritesItems,
  cartItems,
  onAddToCart,
  onAddToFavorite,
}) => {
  return (
    <section>
      <div className="topSection">
        <button>
          <img src="/img/prevSection.svg" alt="" />
        </button>
        <h1>Мои закладки</h1>
      </div>
      <div className="favoriteCards cards d-flex flex-wrap">
        {favoritesItems.map((item, index) => {
          const isAdded = cartItems.some((c) => c.imageUrl === item.imageUrl);
          const isFavorite = favoritesItems.some(
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

export default Favoritepage;
