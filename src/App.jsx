import { useState } from "react";

function App() {
  return (
    <div className="wrapper clear">
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

      <main>
        <section className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1 className="">Все кроссовки</h1>
            <form className="search-block d-flex " action="">
              <img src="/img/search.svg" alt="" />
              <input type="text" placeholder="Поиск..." />
            </form>
          </div>

          <div className="cards d-flex flex-wrap">
            <article className="card">
              <img
                width={133}
                height={112}
                src="/img/nike_airmax.jpg"
                alt="nike sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button d-flex justify-center align-center">
                  <img width={11} height={11} src="/img/plus.svg" alt="" />
                </button>
              </div>
            </article>

            <article className="card">
              <img
                width={133}
                height={112}
                src="/img/nike_blazer_white.jpg"
                alt="nike sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button d-flex justify-center align-center">
                  <img width={11} height={11} src="/img/plus.svg" alt="" />
                </button>
              </div>
            </article>

            <article className="card">
              <img
                width={133}
                height={112}
                src="/img/puma_x_aka.jpg"
                alt="nike sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button d-flex justify-center align-center">
                  <img width={11} height={11} src="/img/plus.svg" alt="" />
                </button>
              </div>
            </article>

            <article className="card">
              <img
                width={133}
                height={112}
                src="/img/nike_blazer.jpg"
                alt="nike sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button d-flex justify-center align-center">
                  <img width={11} height={11} src="/img/plus.svg" alt="" />
                </button>
              </div>
            </article>
            <article className="card">
              <img
                width={133}
                height={112}
                src="/img/nike_blazer.jpg"
                alt="nike sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button d-flex justify-center align-center">
                  <img width={11} height={11} src="/img/plus.svg" alt="" />
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
