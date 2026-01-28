import styles from "./Card.module.scss";
import React from "react";

const Card = ({ id, title, price, imageUrl, onFavorite, favorite, onPlus, added }) => {
  const onClickPlus = () => {
    if (!onPlus) return;
    onPlus({ id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    if (!onFavorite) return;
    onFavorite({ id, title, imageUrl, price });
  };

  return (
    <article className={styles.card}>
      {onFavorite && (
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={favorite ? "/img/isFavorite.svg" : "/img/unlikedheart.svg"} alt="Favorite" />
        </div>
      )}

      <img width={133} height={112} src={imageUrl} alt={title} />
      <h5>{title}</h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        {onPlus && (
          <button
            type="button"
            className={`${styles.button} d-flex justify-center align-center`}
            onClick={onClickPlus}
          >
            <img
              width={32}
              height={32}
              src={added ? "/img/btnChecked.svg" : "/img/plusBtn.svg"}
              alt="Add to cart"
            />
          </button>
        )}
      </div>
    </article>
  );
};

export default Card;
