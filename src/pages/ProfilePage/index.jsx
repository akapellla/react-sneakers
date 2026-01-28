import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import EmptyState from "../../components/EmptyState";
import styles from "./ProfilePage.module.scss";

const ProfilePage = ({ orders, cartItems, favoritesItems }) => {
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <section className="content p-40">
        <EmptyState
          title="У вас нет заказов"
          description="Вы нищеброд? Оформите хотя бы один заказ"
          imageUrl="/img/madSmile.png"
          onClick={() => navigate("/")}
        />
      </section>
    );
  }

  return (
    <section className="content p-40">
      <div className={`d-flex align-center mb-40 ${styles.topSection}`}>
        <Link to={"/"}>
          <img height={35} width={35} src="/img/prevSection.svg" alt="" />
        </Link>
        <h1 className="ml-20">Мои покупки</h1>
      </div>

      <div className="cards d-flex flex-wrap">
        {orders.map((order) => (
          <div key={order.id} className="mb-40">
            <h2 className="mb-20">Заказ №{order.id}</h2>

            <div className="cards d-flex flex-wrap">
              {order.orderItems.map((item) => {
                const isAdded = cartItems.some(
                  (fav) => String(fav.productId) === String(item.productId)
                );

                const isFavorite = favoritesItems?.some(
                  (fav) => String(fav.productId) === String(item.id)
                );

                return (
                  <Card
                    key={`${order.id}-${item.productId}`}
                    id={item.productId}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfilePage;
