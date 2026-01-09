const Card = () => {
  return (
    <article className="card">
      <div className="favorite">
        <img src="/img/unlikedheart.svg" alt="Unliked" />
      </div>

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
  );
};

export default Card;
