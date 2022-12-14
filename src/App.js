import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";

import HomePage from "./component/pages/HomePage";
import CartPage from "./component/pages/CartPage";
import "./App.css";
import "./scss/style.scss";
import { createContext, useState } from "react";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage searchValue={searchValue} />}
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
