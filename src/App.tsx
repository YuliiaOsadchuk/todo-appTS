import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodosPage from "./components/todosPage/TodosPage";

const App: React.FC = () => (
  <Provider store={store}>
    <TodosPage />
  </Provider>
);

export default App;
