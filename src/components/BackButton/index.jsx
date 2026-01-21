import styles from "./BackButton.module.scss";

const BackButton = ({ onClick }) => {
  return (
    <button className={`${styles.backButton}`} onClick={onClick}>
      <img src="/img/arrow.svg" alt="arrow" />
      Вернуться назад
    </button>
  );
};

export default BackButton;
