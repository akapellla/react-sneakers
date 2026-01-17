import CartItem from "./CartItem";

const Drawer = ({ items = [], onClickClose, onClickDelete, cartPrice }) => {
  const tax = cartPrice * 0.05;
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
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
            <div className="cartItems d-flex flex-column">
              {items?.map((item) => (
                <CartItem
                  key={item.imageUrl}
                  item={item}
                  onClickDelete={onClickDelete}
                />
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul className="list">
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

              <button className="placeOrder">
                <span>Оформить заказ</span>
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
        ) : (
          <div className="cartEmpty d-flex align-center flex-column justify-center flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="img/emptyCart.svg"
              alt=""
            />

            <h2 className="mb-10">Корзина пустая</h2>
            <p className="opacity-6 mb-40">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>

            <button className="greenButton" onClick={onClickClose}>
              <img src="/img/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
