/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";

export default function PizzaItem({ title, imageUrl, price, types, sizes }) {
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0);
  const type = ["тонкое", "традиционное"];

  const activeIndexClick = (index) => {
    setActiveTypeIndex(index);
  };
  const activeSizeIndexClick = (index) => {
    setActiveSizeIndex(index);
  };
  const pizzaAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };
  return (
    <>
      <li className="pizzas__item" style={{ width: "350px" }}>
        <img style={{ textShadow: " gray", width: "260px" }} src={imageUrl} />
        <h2 className="pizza__title">{title}</h2>
        <div className="types">
          <ul className="type__list">
            {type.map((item, index) => (
              <li
                onClick={() => activeIndexClick(index)}
                className={`${
                  activeTypeIndex === index ? "active" : ""
                } types__item`}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="sizes__list">
            {sizes.map((item, index) => (
              <li
                onClick={() => activeSizeIndexClick(index)}
                className={`${
                  activeSizeIndex === index ? "active " : ""
                } sizes__item`}
              >
                {item} см.
              </li>
            ))}
          </ul>
        </div>

        <div className="pizzas_add">
          <p className="pizza__price" style={{}}>
            от {price} ₽
          </p>
          <button onClick={pizzaAdd} className="pizza__btn">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#EB5A1E"
              />
            </svg>
            <span>Добавить</span>
            {pizzaCount ? <i className="pizza__count">{pizzaCount}</i> : ""}
          </button>
        </div>
      </li>
    </>
  );
}
