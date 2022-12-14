import React, { useState } from "react";

import vector_up from "../../assets/img/point-up.svg";
import vector_down from "../../assets/img/point-down.svg";
export default function Sort({ value, onClickSortType }) {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState(0);
  const list = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const onClickSelected = (index) => {
    onClickSortType(index);
    setOpen(true);
  };

  // const listClick = (index) => {
  //   setSelected(index);
  //   setOpen(true);
  // };

  return (
    <div className="sort">
      <div className="sort__con" onClick={() => setOpen(!open)}>
        <img
          width="20px"
          className="sort__img"
          src={open ? vector_up : vector_down}
          alt=""
        />
        <b>Сортировка по:</b>
        <span> {value.name}</span>
      </div>
      {!open && (
        <div className="sort__open">
          <ul className="sort__list">
            {list.map((item, index) => (
              <li
                key={item.name}
                onClick={() => onClickSelected(item)}
                className={`${
                  value.sortProperty === item.sortProperty ? "active" : ""
                } sort__item`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
