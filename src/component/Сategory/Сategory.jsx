import React from "react";
import { useState } from "react";

export default function Сategory({ value, onClickCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые ",
  ];

  const onClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="container">
        <div className="categories__sort">
          <div className="categories">
            <ul className="categories__list">
              {categories.map((item, index) => (
                <li
                  onClick={() => onClickCategory(index)}
                  className={value === index ? "active" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
