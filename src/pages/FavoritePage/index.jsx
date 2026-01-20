import Card from "../../components/Card";
import { Link } from "react-router-dom";

import styles from "./FavoritePage.module.scss";

const FavoritePage = ({
  favoritesItems,
  cartItems,
  onAddToCart,
  onAddToFavorite,
}) => {
  return (
    <section className="content p-40">
      <div className={`d-flex align-center mb-40 ${styles.topSection}`}>
        <Link to={"/"}>
          <img height={35} width={35} src="/img/prevSection.svg" alt="" />
        </Link>
        <h1 className="ml-20">Мои закладки</h1>
      </div>
      <div className="cards d-flex flex-wrap">
        {favoritesItems === null ? (
          <p>Загрузка...</p>
        ) : favoritesItems.length > 0 ? (
          favoritesItems.map((item) => {
            const isAdded = cartItems.some((c) => c.imageUrl === item.imageUrl);

            return (
              <Card
                key={item.id ?? item.imageUrl}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={() => onAddToCart(item)}
                added={isAdded}
                onFavorite={() => onAddToFavorite(item)}
                favorite={true}
              />
            );
          })
        ) : (
          <h1>Закладок нет</h1>
        )}
      </div>
    </section>
  );
};

export default FavoritePage;
