import Card from "../../components/Card";
import { Link, useNavigate } from "react-router-dom";

import styles from "./FavoritePage.module.scss";
import BackButton from "../../components/BackButton";
import EmptyState from "../../components/EmptyState";

const FavoritePage = ({
  favoritesItems,
  cartItems,
  onAddToCart,
  onAddToFavorite,
}) => {
  const navigate = useNavigate();

  if (favoritesItems === null) {
    return (
      <section className="content p-40">
        <p>Загрузка...</p>;
      </section>
    );
  }

  if (favoritesItems.length === 0) {
    return (
      <section className="content p-40">
        <EmptyState
          title="Закладок нет :("
          description=" Вы ничего не добавляли в закладки"
          imageUrl="/img/sadSmile.png"
          onClick={() => navigate("/")}
        />
      </section>
    );
  }

  return (
    <section className="content p-40">
      <div className={`d-flex align-center mb-40 ${styles.topSection}`}>
        <Link to={"/"}>
          <img height={35} width={35} src="/img/prevSection.svg" alt="" />
        </Link>
        <h1 className="ml-20">Мои закладки</h1>
      </div>
      <div className="cards d-flex flex-wrap">
        {favoritesItems.map((item) => {
          const isAdded = cartItems.some(
            (fav) => String(fav.productId) === String(item.productId)
          );

          return (
            <Card
              key={item.id}
              id={item.productId}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={() => onAddToCart(item)}
              added={isAdded}
              onFavorite={(obj) => onAddToFavorite(obj)}
              favorite={true}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FavoritePage;
