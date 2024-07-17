import React from "react";
import BgAbstract from "./../../img/bg-abstract.jpg";
import LogoBernardoNurvia from "./../../img/logoBernardoNurvia.jpg";
import Clock from "./Clock";

const BgJumbo = (props) => {
  return (
    <div className="card text-bg-dark align-items-center">
      <img src={BgAbstract} className="card-img" alt="bg-abstract" />

      <div className="card-img-overlay align-items-center">
        <h5 className="card-title">Contador</h5>
        <Clock seconds={props.seconds} className="card" />

        <p className="card-text">
          <small>Last updated 3 mins ago</small>
        </p>
        <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src={LogoBernardoNurvia}
                alt="logo Bernardo Nurvia"
                width="30"
                height="30"
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BgJumbo;
