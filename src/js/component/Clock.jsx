import React, { useEffect, useState } from "react";
import Digito from "./Digito";
//aqui hago la logica para renderizar el reloj
const Clock = (props) => {
  let unidades = props.seconds % 10;
  let decenas = Math.floor(props.seconds / 10) % 10;
  let centenas = Math.floor(props.seconds / 100) % 10;
  let unidadDeMil = Math.floor(props.seconds / 1000) % 10;
  let decenaDeMil = Math.floor(props.seconds / 10000) % 10;
  let centenaDeMil = Math.floor(props.seconds / 100000) % 10;
  let iconTime = <i class="bi bi-clock-history"></i>
  console.log(decenas);
  return (
    <div className="container">
      <div className="row ">
        <Digito time={iconTime} />
        <Digito time={centenaDeMil}/>
        <Digito time={decenaDeMil} />
        <Digito time={unidadDeMil} />
        <Digito time={centenas} />
        <Digito time={decenas} />
        <Digito time={unidades} />
      </div>
    </div>
  );
};
export default Clock;
