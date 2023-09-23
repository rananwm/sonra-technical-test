import { BookReducerState, BooksActionType } from "../../types/IBooks";
import { GET_BOOKS } from "../actions/booksAction";

const initialState: BookReducerState = {
  searchedBooks: {},
};

function booksReducer(
  state: BookReducerState = initialState,
  action: BooksActionType
) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        searchedBooks: { ...state?.searchedBooks, ...action.payload },
      };
    default:
      return state;
  }
}

export default booksReducer;
