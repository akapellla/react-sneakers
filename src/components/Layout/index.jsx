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
}) {
  return (
    <div className={`${styles.wrapper} clear`}>
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickDelete={onDeleteInCart}
          onClickClose={() => setCartOpened(false)}
          cartPrice={cartPrice}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} cartPrice={cartPrice} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
