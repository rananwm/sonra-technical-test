import { Provider } from "react-redux";
import "./App.css";
import Routes from "./routing/Routes";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
