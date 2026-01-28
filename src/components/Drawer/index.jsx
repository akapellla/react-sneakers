import CartItem from "../CartItem";
import EmptyState from "../EmptyState";

import { useNavigate } from "react-router-dom";

import styles from "./Drawer.module.scss";

const Drawer = ({
  items = [],
  onClickClose,
  onClickDelete,
  cartPrice,
  onClickOrder,
  isOrderComplete,
  orderId,
  isOrdering,
  onCloseCart,
}) => {
  const tax = cartPrice * 0.05;

  const handleClose = () => {
    onClickClose();
  };

  return (
    <div className={`${styles.overlay}`}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClickClose}
            className="cu-p"
            height={32}
            width={32}
            src="/img/deleteBtn.svg"
            alt=""
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className={`${styles.cartItems} d-flex flex-column`}>
              {items?.map((item) => (
                <CartItem key={item.imageUrl} item={item} onClickDelete={onClickDelete} />
              ))}
            </div>
            <div className={`${styles.cartTotalBlock}`}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{cartPrice + tax} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{tax.toFixed(2)} руб.</b>
                </li>
              </ul>

              <button className={`${styles.placeOrder}`} onClick={onClickOrder}>
                <span>{isOrdering ? "Оформляем..." : "Оформить заказ"}</span>

                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H14.7143"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.71436 1L14.7144 7L8.71436 13"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : isOrderComplete ? (
          <div
            className={`${styles.cartEmpty} d-flex align-center flex-column justify-center flex`}
          >
            <EmptyState
              title="Заказ оформлен!"
              description={`Ваш заказ №${orderId} скоро передадут в доставку.`}
              imageUrl="img/orderComplete.png"
              onClick={handleClose}
            />
          </div>
        ) : (
          <div
            className={`${styles.cartEmpty} d-flex align-center flex-column justify-center flex`}
          >
            <EmptyState
              title="Корзина пустая"
              description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              imageUrl="img/emptyCart.svg"
              onClick={handleClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
