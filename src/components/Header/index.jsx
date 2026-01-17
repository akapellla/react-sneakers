import "./Header.scss";

const Header = ({ onClickCart, cartPrice }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img
          className="mr-15"
          width={40}
          height={40}
          src="/img/logo.png"
          alt=""
        />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="">Магазин лучших кроссовок</p>
        </div>
      </div>

      <nav>
        <ul className="d-flex">
          <li onClick={onClickCart}>
            <img src="/img/cart.svg" alt="" />
            <span className="price">{cartPrice} руб.</span>
          </li>
          <li>
            <img src="/img/favorite.svg" alt="favorite" />
            <span>Закладки</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="" />
            <span>Профиль</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
