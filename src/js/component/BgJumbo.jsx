import React from "react";
import BgAbstract from "./../../img/bg-abstract.jpg";
import LogoBernardoNurvia from "./../../img/logoBernardoNurvia.jpg";
import Clock from "./Clock";

const BgJumbo = (props) => {
  return (
    <div className="card text-bg-dark align-items-center">
      <img src={BgAbstract} className="card-img" alt="bg-abstract" />

      <div className="card-img-overlay text-center">
        <h1 className="card-title">Contador</h1>
        <Clock seconds={props.seconds} className="card" />

        <h2 className="mb-5 mt-5 card-text text-center my-auto fs-2">
          Last updated {props.seconds} seconds ago
        </h2>

        <nav className="mt-5 sticky-bottom bg-body-tertiary">
          <div className="m-auto">
            <a className="navbar-brand col text-center" href="#">
              <img
                src={LogoBernardoNurvia}
                alt="logo Bernardo Nurvia"
                width="60"
                height="60"
              />{" "}
              <h2 className="fs-2 m-auto">Hecho por Bernardo Nurvia</h2>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BgJumbo;
