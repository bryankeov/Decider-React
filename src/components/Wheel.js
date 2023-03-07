import React from "react";
import Wedge from "./Wedge";
import "./Wheel.css";

function Wheel(props) {
  const choices = props.choices;
  const wedgeContainer = document.querySelector(".wedge-container");

  //Random spin of choices wheel.
  //Increased multiplied rate to produce better spin visuals
  function spinWheel() {
    let num = Math.ceil(Math.random() * 5000);
    wedgeContainer.style.transform = `Rotate(${num}deg)`;
    num += Math.ceil(Math.random() * 5000);
  }

  return (
    <div className="wheel">
      <button id="spin" onClick={spinWheel}>
        Spin
      </button>
      <div className="arrow">⬇</div>
      <Wedge choices={choices} />
    </div>
  );
}

export default Wheel;
