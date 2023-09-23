import { useNavigate } from "react-router-dom";
import { Volume } from "../../types/IBooks";
import styles from "./Card.module.css";

const Card = ({ item }: { item: Volume }) => {
  const navigation = useNavigate();
  return (
    <div
      className={styles.cardContainer}
      onClick={() => navigation(`/detail/${item?.id}`)}
    >
      <img
        src={`https://books.google.com/books/publisher/content/images/frontcover/${item?.id}?fife=w400-h600&source=gbs_api`}
      />
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{item?.volumeInfo?.title}</h3>
      </div>
    </div>
  );
};

export default Card;
