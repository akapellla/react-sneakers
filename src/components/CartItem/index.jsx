import styles from "./CartItem.module.scss";

const CartItem = ({ item = [], onClickDelete }) => {
  return (
    <article className={`${styles.cartItem} d-flex p-20`}>
      <img
        className="mr-20"
        src={item.imageUrl}
        width={70}
        height={70}
        alt={item.title}
      />
      <div className={styles.itemDesc}>
        <p>{item.title}</p>
        <div className="d-flex align-center justify-between">
          <b>{item.price} руб.</b>
          <button onClick={() => onClickDelete(item.id)}>
            <img height={32} width={32} src="/img/deleteBtn.svg" alt="" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
