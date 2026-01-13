import styles from "./Card.module.scss";
import React from "react";

const Card = ({ title, price, imageUrl, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <article className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/unlikedheart.svg" alt="Unliked" />
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
            src={isAdded ? "/img/btnChecked.svg" : "/img/plusBtn.svg"}
            alt=""
          />
        </button>
      </div>
    </article>
  );
};

export default Card;
