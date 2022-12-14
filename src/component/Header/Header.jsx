import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search";

import pizza from "../../assets/img/pizza.svg";
import corzina from "../../assets/img/corzina.svg";
import tayak from "../../assets/img/tayak.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <img width="38px" src={pizza} alt="" />
          <NavLink to={"/"}>
            <div className="add">
              <h1 style={{ fontSize: "24px" }}>React Pizza</h1>
              <p style={{ color: "#7B7B7B", fontSize: "16px" }}>
                самая вкусная пицца во вселенной
              </p>
            </div>
          </NavLink>
          <Search />

          <div className="wrapper">
            <NavLink to={"/cart"}>
              <a className="wrapper__list" href="">
                <p
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "14px",
                  }}
                >
                  520 ₽
                </p>
                <img
                  style={{
                    width: "0.7px",
                  }}
                  src={tayak}
                  alt=""
                />
                <img
                  style={{ width: "15px", marginLeft: "10px" }}
                  src={corzina}
                  alt=""
                />
              </a>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
