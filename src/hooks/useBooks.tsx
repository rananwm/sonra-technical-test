import { useEffect, useState } from "react";
import { getBooks } from "../store/actions/booksAction";
import { useAppDispatch, useAppSelector } from "./hook";
import { BookReducerState, GetBooks } from "../types/IBooks";

const useBooks = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("classic");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const booksData = useAppSelector(
    (store) =>
      (store?.books as BookReducerState)?.searchedBooks?.[
        `${query?.replace(/\s/g, "")}_${currentPage}`
      ]
  );
  const [isLoading, setLoading] = useState(false);
  const data = useAppSelector((store) => store?.books as BookReducerState);
  const pageCount = Math.ceil(booksData?.totalItems / 20);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      setQuery(search);
      if (
        data?.searchedBooks?.[`${search?.replace(/\s/g, "")}_${currentPage}`]
          ?.items?.length
      ) {
        return;
      }
      setLoading(true);
      addSearchTermToHistory(search);
      dispatch(
        getBooks(currentPage, search, setLoading) as unknown as GetBooks
      );
    }, 500);

    return () => clearTimeout(getData);
  }, [search, currentPage]);

  const addSearchTermToHistory = (term: string) => {
    term.trimEnd();
    if (term.trim() === "") {
      return;
    }
    const updatedHistory = searchHistory.filter((item) => item !== term);
    if (updatedHistory.length === 10) {
      updatedHistory.pop();
    }
    updatedHistory.unshift(term);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handlePageChange = (data: { selected: number }) => {
    setCurrentPage(data?.selected + 1);
  };

  return {
    search,
    handleInputChange,
    booksData,
    pageCount,
    handlePageChange,
    searchHistory,
    setSearch,
    query,
    isLoading,
  };
};

export default useBooks;
