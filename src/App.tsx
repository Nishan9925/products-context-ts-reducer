import { useReducer } from "react";
import "./App.css";
import { BasketList } from "./components/BasketList";
import { ProductList } from "./components/ProductList";
import { initialState, ProductContext } from "./context/context";
import { reducer } from "./context/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="wrapper">
      <ProductContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <BasketList />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
