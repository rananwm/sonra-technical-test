import { MagnifyingGlass } from "react-loader-spinner";
import useDetail from "../../hooks/useDetail";
import styles from "./Detail.module.css";
import Header from "../../components/Header/Header";

const Detail = () => {
  const { bookDetail, isLoading } = useDetail();
  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <MagnifyingGlass
          visible={isLoading}
          height="120"
          width="120"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#023e8a"
        />
      </div>
    );
  }
  if (bookDetail) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.detailContainer}>
          <div className={styles.image}>
            <img
              src={`https://books.google.com/books/publisher/content/images/frontcover/${bookDetail?.id}?fife=w400-h600&source=gbs_api`}
            />
          </div>
          <div className={styles.detailTextContainer}>
            <h1>{bookDetail?.volumeInfo?.title}</h1>
            <div>
              <h2>
                Author{bookDetail?.volumeInfo?.authors?.length > 1 ? "s" : ""}:{" "}
                {bookDetail?.volumeInfo?.authors?.map(
                  (item, i) => `${i > 0 ? "& " : ""}${item}` + "  "
                )}
              </h2>
              <h2>Published at: {bookDetail?.volumeInfo?.publishedDate}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: bookDetail?.volumeInfo?.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div>Something went wrong</div>;
  }
};

export default Detail;
