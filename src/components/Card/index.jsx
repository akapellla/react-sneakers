import styles from "./Card.module.scss";
import React from "react";

const Card = ({
  title,
  price,
  imageUrl,
  onFavorite,
  favorite,
  onPlus,
  added,
}) => {
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
  };

  return (
    <article className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={favorite ? "img/isFavorite.svg" : "/img/unlikedheart.svg"}
          alt="Unliked"
        />
      </div>

      <img width={133} height={112} src={imageUrl} alt="nike sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button
          className={`${styles.button} d-flex justify-center align-center`}
          onClick={onClickPlus}
        >
          <img
            width={32}
            height={32}
            src={added ? "/img/btnChecked.svg" : "/img/plusBtn.svg"}
            alt=""
          />
        </button>
      </div>
    </article>
  );
};

export default Card;
