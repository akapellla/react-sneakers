import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

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
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
