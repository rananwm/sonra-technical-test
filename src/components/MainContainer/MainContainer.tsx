import styles from "./MainContainer.module.css";
const MainContainer = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("search_page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.container}>
      <img className={styles.mainImage} src="/home/booksImage.webp" />
      <div className={styles.mainTextContainer}>
        <h5>BACK TO SCHOOL</h5>
        <h1>
          SPECIAL <span className={styles.colorText}> 50% OFF</span>
        </h1>
        <h4>FOR OUR STUDENT COMMUNITY</h4>
        <button onClick={handleClickScroll} className={styles.getButton}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
