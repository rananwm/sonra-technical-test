import styles from "./Books.module.css";
import useBooks from "../../hooks/useBooks";
import Card from "../Card/Card";
import { MagnifyingGlass } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import { Volume } from "../../types/IBooks";

const Books = () => {
  const {
    search,
    handleInputChange,
    booksData,
    pageCount,
    handlePageChange,
    searchHistory,
    setSearch,
    isLoading,
  } = useBooks();
  return (
    <div className={styles.booksContainer} id="search_page">
      <div className={styles.searchParent}>
        <h1 className={styles.searchTitle}>Search for books</h1>
        <div className={styles.searchContainer}>
          <img src="/home/search.svg" />
          <input
            value={search}
            onChange={handleInputChange}
            className={styles.searchInput}
            placeholder="Search over 30 million books"
          />
          <div className={styles.dropdown}>
            {searchHistory.length ? (
              searchHistory?.map((item, i) => (
                <div
                  className={styles.dropdownItem}
                  onClick={() => setSearch(item)}
                  key={i}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className={styles.dropdownItem}>No record found</div>
            )}
          </div>
        </div>
      </div>
      {isLoading ? (
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
          />{" "}
        </div>
      ) : (
        <div className={styles.gridContainer}>
          {booksData?.items?.map((item: Volume) => (
            <Card item={item} key={item?.id} />
          ))}
        </div>
      )}
      <div
        className={`${styles.pagination} ${
          !booksData && styles.emptyPagination
        }`}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel={<img src="/home/next.svg" />}
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<img src="/home/prev.svg" />}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
export default Books;
