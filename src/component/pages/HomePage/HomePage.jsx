import React from "react";
import PizzaList from "../../pizza";
import { useState } from "react";
import { useEffect } from "react";
import Category from "../../Сategory";
import Sort from "../../Sort";
import Pagination from "../../Pagination";
import { useContext } from "react";
import { SearchContext } from "../../../App";

export default function HomePage({}) {
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://638dae954190defdb74a1799.mockapi.io/pizza?limit=6&page=${currentPage}&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}&order=desc${search}`
    ).then((res) =>
      res.json().then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      })
    );
  }, [categoryId, sortType, search, currentPage]);

  return (
    <>
      <div className="container">
        <Category
          value={categoryId}
          onClickCategory={(index) => setCategoryId(index)}
        />

        <Sort
          value={sortType}
          onClickSortType={(index) => setSortType(index)}
        />

        <PizzaList pizzas={pizzas} isLoading={isLoading} />
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
}
