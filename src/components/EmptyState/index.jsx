import BackButton from "../BackButton";
import styles from "./EmptyState.module.scss";

const EmptyState = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      className={`${styles.emptyFavorite} d-flex flex-column justify-center align-center`}
    >
      <img className="mb-30" height={70} width={70} src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p className="mt-10">{description}</p>
      <BackButton onClick={onClick}></BackButton>
    </div>
  );
};

export default EmptyState;
