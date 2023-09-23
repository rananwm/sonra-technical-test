import axios from "axios";
import { AnyAction, Dispatch } from "redux";
export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_STARTED = "GET_BOOKS_STARTED";
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";

export const getBooksAsync = async (
  currentPage: number | null,
  search: string
) => {
  let url = `${process.env.BOOK_API_BASE_URL}/volumes?q=${
    search || "classic"
  }&maxResults=20&key=${process.env.API_KEY}`;
  if (currentPage) {
    url = url + `&startIndex=${currentPage * 20}`;
  }
  const res = await axios.get(url);
  return res.data;
};

export const getBooks = (
  currentPage: number | null,
  search: string,
  setLoading: (isLoading: boolean) => void
) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      const res = await getBooksAsync(currentPage, search);
      dispatch({
        type: GET_BOOKS,
        payload: { [`${search?.replace(/\s/g, "")}_${currentPage}`]: res },
      });
    } catch (error) {
      dispatch({
        type: GET_BOOKS_ERROR,
      });
    } finally {
      setLoading(false);
    }
  };
};
