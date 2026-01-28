import { Outlet } from "react-router-dom";
import Drawer from "../Drawer";
import Header from "../Header";
import styles from "./Layout.module.scss";

export default function Layout({
  cartOpened,
  setCartOpened,
  cartItems,
  cartPrice,
  onDeleteInCart,
  onClickOrder,
  isOrderComplete,
  orderId,
  isOrdering,
  onCloseCart,
}) {
  return (
    <div className={`${styles.wrapper} clear`}>
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickDelete={onDeleteInCart}
          onClickClose={() => setCartOpened(false)}
          cartPrice={cartPrice}
          onClickOrder={onClickOrder}
          isOrderComplete={isOrderComplete}
          orderId={orderId}
          isOrdering={isOrdering}
          onCloseCart={onCloseCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} cartPrice={cartPrice} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
