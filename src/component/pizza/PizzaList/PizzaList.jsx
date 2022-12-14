import React from "react";
import Skeleton from "../../Skeleton";
import PizzaItem from "../PizzaItem";

export default function PizzaList({ isLoading, pizzas, searchValue }) {
  return (
    <div className="container pizza_nav">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Все пиццы</h1>
      <ul className="pizza__list" style={{ flexWrap: "wrap" }}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaItem key={item.id} {...item} />)}
      </ul>
    </div>
  );
}
// https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg
