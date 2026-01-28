import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ onClickCart, cartPrice }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <nav>
        <ul className="d-flex">
          <li onClick={onClickCart}>
            <img src="/img/cart.svg" alt="" />
            <span className="price">{cartPrice} руб.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img src="/img/favorite.svg" alt="favorite" />
              <span>Закладки</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src="/img/user.svg" alt="" />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
