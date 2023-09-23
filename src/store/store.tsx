import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import booksReducer from "./reducers/booksReducer";

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
