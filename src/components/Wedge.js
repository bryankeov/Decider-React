import React from "react";
import "./Wedge.css";

function Wedge(props) {
  const choices = props.choices;
  let wedgeSize = 360 / choices.length;
  console.log(wedgeSize, choices.length);

  return (
    <div className="wedge-container">
      {choices.map((choice, i) => {
        return (
          <div
            key={i}
            className="wedge"
            style={{
              transform: `rotate(${i * wedgeSize}deg) skewY(${
                wedgeSize - 90
              }deg)`,
              backgroundColor:
                "#" +
                (0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6),
            }}
          >
            <span
              className="inner"
              style={{
                transform: `skewY(${-(wedgeSize - 90)}deg) rotate(${
                  wedgeSize / 2
                }deg)`,
              }}
            >
              {choice}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Wedge;
