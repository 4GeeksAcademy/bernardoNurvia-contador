import React from "react";
import BgAbstract from "./../../img/bg-abstract.jpg";
import BgJumbo from "./BgJumbo";

const Home = (props) => {
  return (
    <div className="card text-bg-dark">
      <BgJumbo seconds={props.seconds} />
    </div>
  );
};

export default Home;
