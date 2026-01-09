const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="">Магазин лучших кроссовок</p>
        </div>
      </div>

      <nav className="">
        <ul className="d-flex">
          <li className="mr-30 d-flex align-center">
            <img src="/img/cart.svg" alt="" />
            <span className="">1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
